import { useEffect, useState } from 'react';
import { fetchEngineeringStats } from '@/lib/stats';
import { Code2, Award } from 'lucide-react';

interface Stats {
  github: { totalContributions: number };
  leetcode: { totalSolved: number; easy: number; medium: number; hard: number };
  scholarships: number;
  error?: string;
}

export function LiveEngineeringStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 backdrop-blur">
        <h3 className="text-lg font-semibold text-white mb-4">Live Engineering Stats</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 bg-slate-800/50 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const metricRow = (
    icon: React.ReactNode,
    label: string,
    value: string | number,
    unit?: string,
    sublabel?: string
  ) => (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/60 transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-slate-700/50 group-hover:bg-slate-700/80 flex items-center justify-center text-slate-300 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-xl font-bold text-white">
          {value}
          {unit && <span className="text-sm text-slate-400 ml-1">{unit}</span>}
        </p>
        {sublabel && <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 backdrop-blur">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Live Engineering Stats</h3>
        <p className="text-xs text-slate-400 mt-1">Updated every 6 hours • Real-time data</p>
      </div>

      <div className="space-y-2">
        {metricRow(
          <Code2 className="w-5 h-5" />,
          'Total Contributions',
          stats.github.totalContributions >= 400 ? `${stats.github.totalContributions}+` : stats.github.totalContributions,
          '',
          'All-time GitHub contributions across all repositories'
        )}

        {metricRow(
          <Award className="w-5 h-5" />,
          'LeetCode Problems Solved',
          stats.leetcode.totalSolved,
          'problems',
          `${stats.leetcode.easy}E · ${stats.leetcode.medium}M · ${stats.leetcode.hard}H`
        )}

        {metricRow(
          <Award className="w-5 h-5" />,
          'Scholarships Awarded',
          stats.scholarships,
          ''
        )}
      </div>

      {stats.error && (
        <p className="mt-4 text-xs text-amber-400/70">
          Using cached data. {stats.error}
        </p>
      )}
    </div>
  );
}
