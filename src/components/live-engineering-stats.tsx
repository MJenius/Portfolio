import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchEngineeringStats } from '@/lib/stats';
import { Code2, Award, Sparkles } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { GitHubCalendar } from 'react-github-calendar';

interface Stats {
  github: { totalContributions: number };
  leetcode: { totalSolved: number; easy: number; medium: number; hard: number };
  scholarships: number;
  error?: string;
}

export function LiveEngineeringStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  // Animated counter state values
  const [animatedValues, setAnimatedValues] = useState({
    contributions: 0,
    leetcodeTotal: 0,
    leetcodeEasy: 0,
    leetcodeMedium: 0,
    leetcodeHard: 0,
    scholarships: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLSpanElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const runAnimation = useCallback(() => {
    if (!stats || !containerRef.current) return;

    // Reset initial values
    setAnimatedValues({
      contributions: 0,
      leetcodeTotal: 0,
      leetcodeEasy: 0,
      leetcodeMedium: 0,
      leetcodeHard: 0,
      scholarships: 0,
    });

    const counterObj = {
      contributions: 0,
      leetcodeTotal: 0,
      leetcodeEasy: 0,
      leetcodeMedium: 0,
      leetcodeHard: 0,
      scholarships: 0,
    };

    const counterAnim = animate(counterObj, {
      contributions: stats.github.totalContributions,
      leetcodeTotal: stats.leetcode.totalSolved,
      leetcodeEasy: stats.leetcode.easy,
      leetcodeMedium: stats.leetcode.medium,
      leetcodeHard: stats.leetcode.hard,
      scholarships: stats.scholarships,
      duration: 1500,
      ease: 'outExpo',
      onUpdate: () => {
        setAnimatedValues({
          contributions: Math.round(counterObj.contributions),
          leetcodeTotal: Math.round(counterObj.leetcodeTotal),
          leetcodeEasy: Math.round(counterObj.leetcodeEasy),
          leetcodeMedium: Math.round(counterObj.leetcodeMedium),
          leetcodeHard: Math.round(counterObj.leetcodeHard),
          scholarships: Math.round(counterObj.scholarships),
        });
      },
    });

    // Staggered cards entrance
    const cards = containerRef.current.querySelectorAll('.stat-metric-card');
    if (cards.length > 0) {
      animate(cards, {
        opacity: [0, 1],
        translateY: [14, 0],
        scale: [0.97, 1],
        delay: stagger(80, { start: 50 }),
        duration: 600,
        ease: 'outBack(1.4)',
      });
    }

    // Animated LeetCode progress bar widths
    if (progressBarsRef.current) {
      const bars = progressBarsRef.current.querySelectorAll('.meter-segment');
      animate(bars, {
        scaleX: [0, 1],
        duration: 1100,
        delay: stagger(60, { start: 250 }),
        ease: 'outCubic',
      });
    }

    return () => {
      counterAnim.revert();
    };
  }, [stats]);

  // Initial load
  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchEngineeringStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  // Trigger animation whenever stats load or when entering/navigating to About Me
  useEffect(() => {
    if (!stats) return;

    runAnimation();

    // Pulse animation on the live dot
    if (pulseRef.current) {
      animate(pulseRef.current, {
        scale: [1, 1.8, 1],
        opacity: [0.9, 0.2, 0.9],
        duration: 2000,
        loop: true,
        ease: 'inOutSine',
      });
    }

    // Listen for dock curtain transition to "About Me"
    const handleCurtainTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionName?: string }>;
      if (customEvent.detail?.sectionName?.toLowerCase().includes('about')) {
        setTimeout(() => {
          runAnimation();
        }, 350);
      }
    };

    // Intersection observer for scrolling into About Me section
    let observer: IntersectionObserver | null = null;
    if (containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!isFirstRender.current) {
                runAnimation();
              }
              isFirstRender.current = false;
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(containerRef.current);
    }

    window.addEventListener('portfolio:curtain-transition', handleCurtainTransition);

    return () => {
      window.removeEventListener('portfolio:curtain-transition', handleCurtainTransition);
      observer?.disconnect();
    };
  }, [stats, runAnimation]);

  if (loading) {
    return (
      <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 backdrop-blur">
        <h3 className="text-lg font-semibold text-white mb-4">Live Engineering Stats</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 bg-slate-800/50 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const totalLc = stats.leetcode.totalSolved || 1;
  const easyPct = Math.round((stats.leetcode.easy / totalLc) * 100);
  const medPct = Math.round((stats.leetcode.medium / totalLc) * 100);
  const hardPct = 100 - easyPct - medPct;

  return (
    <div
      ref={containerRef}
      className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-4.5 backdrop-blur shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-white tracking-tight">Live Engineering Stats</h3>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span ref={pulseRef} className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 inline-block" />
            LIVE
          </span>
        </div>
      </div>

      {/* Metric Cards List */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        {/* GitHub Contributions Calendar */}
        <div className="stat-metric-card p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/40 hover:border-blue-500/30 transition-all group/card">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <div className="w-5.5 h-5.5 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Code2 className="w-3 h-3" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200 tracking-wide">GitHub Activity</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">
                {animatedValues.contributions} <span className="text-[10px] font-normal text-slate-400 font-sans">commits in past year</span>
              </span>
              <a
                href="https://github.com/MJenius"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-0.5 ml-1"
              >
                ↗
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center py-0.5 overflow-hidden">
            <GitHubCalendar
              username="MJenius"
              colorScheme="dark"
              fontSize={10}
              blockSize={12}
              blockMargin={3}
              blockRadius={2.5}
              showColorLegend={false}
              showTotalCount={false}
              transformData={(contributions) => {
                // Show last 22 weeks scaled nicely to fill width
                return contributions.slice(-22 * 7);
              }}
              theme={{
                dark: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>

        {/* LeetCode Problems Solved Card */}
        <div className="stat-metric-card p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/40 hover:border-amber-500/30 transition-all group/card">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover/card:bg-amber-500/20 flex items-center justify-center text-amber-400 transition-colors shrink-0">
              <Award className="w-4.5 h-4.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">LeetCode Solved</p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium">
                  <span className="text-emerald-400">{animatedValues.leetcodeEasy}E</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-amber-400">{animatedValues.leetcodeMedium}M</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-rose-400">{animatedValues.leetcodeHard}H</span>
                </div>
              </div>
              <p className="text-xl font-black text-white tracking-tight font-mono">
                {animatedValues.leetcodeTotal}
                <span className="text-xs font-normal text-slate-400 ml-1 font-sans">problems</span>
              </p>
            </div>
          </div>

          {/* Animated Multi-segment Progress Bar */}
          <div ref={progressBarsRef} className="mt-1.5 pt-1.5 border-t border-slate-700/50">
            <div className="h-1.5 w-full bg-slate-700/60 rounded-full overflow-hidden flex">
              <div
                className="meter-segment h-full bg-emerald-500 origin-left"
                style={{ width: `${easyPct}%` }}
                title={`Easy: ${stats.leetcode.easy}`}
              />
              <div
                className="meter-segment h-full bg-amber-500 origin-left"
                style={{ width: `${medPct}%` }}
                title={`Medium: ${stats.leetcode.medium}`}
              />
              <div
                className="meter-segment h-full bg-rose-500 origin-left"
                style={{ width: `${hardPct}%` }}
                title={`Hard: ${stats.leetcode.hard}`}
              />
            </div>
            <div className="flex justify-between items-center text-[9.5px] text-slate-400 mt-1 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Easy ({easyPct}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" /> Medium ({medPct}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" /> Hard ({hardPct}%)
              </span>
            </div>
          </div>
        </div>

        {/* Scholarships Card */}
        <div className="stat-metric-card flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/40 hover:border-purple-500/30 transition-all group/card">
          <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover/card:bg-purple-500/20 flex items-center justify-center text-purple-400 transition-colors shrink-0">
            <Sparkles className="w-4.5 h-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Scholarships Awarded</p>
            <p className="text-xl font-black text-white tracking-tight font-mono">
              {animatedValues.scholarships}
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Academic & merit excellence recognition
            </p>
          </div>
        </div>
      </div>

      {stats.error && (
        <p className="mt-4 text-xs text-amber-400/70">
          Using cached data. {stats.error}
        </p>
      )}
    </div>
  );
}
