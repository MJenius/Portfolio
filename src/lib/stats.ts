// API service for fetching live engineering stats
// Caches data in localStorage with 6-hour expiry

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours
const GITHUB_USERNAME = 'MJenius';
const LEETCODE_USERNAME = 'mjenius1357';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface GitHubStats {
  totalContributions: number;
}

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
}

interface EngineeringStats {
  github: GitHubStats;
  leetcode: LeetCodeStats;
  cgpa: number;
  error?: string;
}

function getCache<T>(key: string): T | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const entry: CacheEntry<T> = JSON.parse(cached);
    const isExpired = Date.now() - entry.timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    console.error('Failed to cache:', key);
  }
}

async function fetchGitHubStats(): Promise<GitHubStats> {
  const cacheKey = 'github_stats';
  const cached = getCache<GitHubStats>(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    // Use GitHub Contributions API to get all years of contributions
    const currentYear = new Date().getFullYear();
    const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];
    
    const responses = await Promise.all(
      years.map(year =>
        fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
          {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
          }
        )
      )
    );

    let totalContributions = 0;
    
    for (const response of responses) {
      if (response.ok) {
        const result = await response.json();
        totalContributions += result.total?.[String(result.year)] || 0;
      }
    }

    const stats: GitHubStats = { totalContributions: totalContributions || 380 };
    setCache(cacheKey, stats);
    return stats;
  } catch (error) {
    console.error('GitHub stats fetch error:', error);
    return { totalContributions: 380 };
  }
}

async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const cacheKey = 'leetcode_stats';
  const cached = getCache<LeetCodeStats>(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    // Use alfa-leetcode-api (public, CORS-friendly API)
    const response = await fetch(
      `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch LeetCode data');

    const result = await response.json();

    const stats: LeetCodeStats = {
      totalSolved: result.solvedProblem || 235,
      easy: result.easySolved || 78,
      medium: result.mediumSolved || 125,
      hard: result.hardSolved || 32,
    };

    setCache(cacheKey, stats);
    return stats;
  } catch (error) {
    console.error('LeetCode stats fetch error:', error);
    return { totalSolved: 235, easy: 78, medium: 125, hard: 32 };
  }
}

export async function fetchEngineeringStats(): Promise<EngineeringStats> {
  try {
    const [github, leetcode] = await Promise.all([
      fetchGitHubStats(),
      fetchLeetCodeStats(),
    ]);

    return {
      github,
      leetcode,
      cgpa: 7.78,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      github: { totalContributions: 0 },
      leetcode: { totalSolved: 185, easy: 62, medium: 98, hard: 25 },
      cgpa: 7.78,
      error: 'Failed to fetch live stats',
    };
  }
}
