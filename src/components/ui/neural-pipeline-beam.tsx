import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Zap, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { BorderBeam } from './border-beam';

interface NodeItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  status: string;
}

const pipelineNodes: NodeItem[] = [
  {
    id: 'ingest',
    title: 'Data Ingestion',
    subtitle: '58.3M records / Kafka streaming',
    icon: Database,
    color: '#3b82f6',
    status: 'Active stream',
  },
  {
    id: 'embeddings',
    title: 'Vector & Embeddings',
    subtitle: 'Dense retrieval & cosine index',
    icon: Brain,
    color: '#a855f7',
    status: '95-100% NL2SQL',
  },
  {
    id: 'rag',
    title: 'FastAPI & Agentic RAG',
    subtitle: 'Multi-tenant workflow orchestration',
    icon: Zap,
    color: '#06b6d4',
    status: 'Sub-40ms latency',
  },
  {
    id: 'inference',
    title: 'Production Serving',
    subtitle: 'PPO & LightGBM inference cluster',
    icon: Cpu,
    color: '#10b981',
    status: '553 req/s throughput',
  },
];

export function NeuralPipelineBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-700/60 p-6 md:p-8 backdrop-blur shadow-2xl my-6"
    >
      <BorderBeam size={240} duration={10} colorFrom="#38bdf8" colorTo="#a855f7" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Production ML & Agentic Systems Architecture
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              LIVE PIPELINE
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time multi-stage pipeline across RAG, vector search, and high-throughput inference
          </p>
        </div>
      </div>

      {/* Pipeline Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {pipelineNodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === pipelineNodes.length - 1;

          return (
            <div key={node.id} className="relative flex flex-col">
              {/* Card */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex-1 p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${node.color}20`,
                        color: node.color,
                        border: `1px solid ${node.color}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                      STAGE 0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {node.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-700/50 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3 inline" /> {node.status}
                  </span>
                </div>
              </motion.div>

              {/* Connecting arrow on desktop */}
              {!isLast && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/40 items-center justify-center text-cyan-400 shadow-md">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic SVG Neural Beam Pulse */}
      <div className="hidden md:block relative h-1.5 w-full mt-6 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_12px_#38bdf8]"
          animate={{
            left: ['-20%', '120%'],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
