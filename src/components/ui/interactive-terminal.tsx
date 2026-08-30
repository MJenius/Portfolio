import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, RotateCcw, Check, Copy } from 'lucide-react';
import { BorderBeam } from './border-beam';


interface TerminalTab {
  id: string;
  name: string;
  command: string;
  logs: Array<{ text: string; color?: string; delay?: number }>;
}

const tabs: TerminalTab[] = [
  {
    id: 'rag',
    name: 'rag_benchmark.py',
    command: 'python -m agents.evaluator --benchmark 100_queries --model rag-v2',
    logs: [
      { text: '[INIT] Initializing multi-tenant RAG workflow...', color: 'text-blue-400' },
      { text: '[VECTOR] Connecting to vector database & cosine index...', color: 'text-indigo-400' },
      { text: '[RETRIEVE] Executing dense vector search over documentation corpus', color: 'text-slate-300' },
      { text: '[EVAL] Benchmark completed: 100 queries evaluated', color: 'text-amber-400' },
      { text: '✓ NL-to-SQL Accuracy: 98.4% (Top-1 precision: 99.1%)', color: 'text-emerald-400 font-bold' },
      { text: '✓ Median retrieval latency: 38ms (P99: 72ms)', color: 'text-emerald-400 font-bold' },
    ],
  },
  {
    id: 'traffic',
    name: 'ppo_traffic.py',
    command: 'python train_rl.py --env TrafficControl-v1 --episodes 1000 --algo PPO',
    logs: [
      { text: '[ENV] Loading multi-intersection simulator with emergency priority...', color: 'text-blue-400' },
      { text: '[POLICY] Optimizing Actor-Critic networks (lr=3e-4, clip=0.2)', color: 'text-purple-400' },
      { text: '[STEP 850] Reward converged. Collision rate: 0.00%', color: 'text-slate-300' },
      { text: '✓ Emergency transit time cut by 10.6%', color: 'text-emerald-400 font-bold' },
      { text: '✓ Mean junction wait time reduced by 18.2%', color: 'text-emerald-400 font-bold' },
    ],
  },
  {
    id: 'kafka',
    name: 'kafka_stream.sh',
    command: './benchmark_streaming.sh --brokers 3 --producers 16 --records 58.3M',
    logs: [
      { text: '[KAFKA] Cluster topology verified: 3 brokers healthy', color: 'text-blue-400' },
      { text: '[INGEST] Consuming event stream across partitions...', color: 'text-slate-300' },
      { text: '[STATS] Processed 58,320,000 telemetry events', color: 'text-amber-400' },
      { text: '✓ Peak sustained throughput: 553 req/s (+57% gain)', color: 'text-emerald-400 font-bold' },
      { text: '✓ Zero message drop rate under simulated network jitter', color: 'text-emerald-400 font-bold' },
    ],
  },
];

export function InteractiveTerminal() {
  const [activeTabId, setActiveTabId] = useState('rag');
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  useEffect(() => {
    setVisibleLogs(0);
    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        if (prev < activeTab.logs.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 350);

    return () => clearInterval(interval);
  }, [activeTabId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReplay = () => {
    setVisibleLogs(0);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl my-6 font-mono">
      <BorderBeam size={200} duration={14} colorFrom="#38bdf8" colorTo="#6366f1" />

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 ml-3 text-xs text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-slate-300">mevin-runtime</span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-2.5 py-1 rounded text-xs transition-all ${
                activeTabId === tab.id
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleReplay}
            title="Replay Execution"
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopy}
            title="Copy Command"
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 text-xs sm:text-sm leading-relaxed space-y-2 min-h-[220px] bg-slate-950/90 text-slate-300">
        {/* Command line */}
        <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800/80 pb-2">
          <span className="text-emerald-400">➜</span>
          <span className="text-cyan-400">~</span>
          <span className="text-slate-100">{activeTab.command}</span>
        </div>

        {/* Live log stream */}
        <div className="space-y-1.5 pt-1">
          {activeTab.logs.slice(0, visibleLogs).map((log, idx) => (
            <div key={idx} className={`${log.color || 'text-slate-300'} flex items-start gap-2`}>
              <span className="text-slate-600 select-none text-[11px] mt-0.5">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{log.text}</span>
            </div>
          ))}

          {/* Pulsing blinking cursor while running or active */}
          <div className="flex items-center gap-2 pt-1 text-slate-500">
            <span className="text-slate-600 select-none text-[11px]">
              {String(Math.min(visibleLogs + 1, activeTab.logs.length + 1)).padStart(2, '0')}
            </span>
            <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
