import { useEffect, useRef } from 'react';
import { GradientButton } from './gradient-button';
import { Mail, Download, Radio } from 'lucide-react';
import { animate } from 'animejs';

export default function SchemaCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const beaconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = cardRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Neural / Audio wave strands
    const waveParams = [
      { freq: 0.015, amp: 28, speed: 0.03, color: 'rgba(99, 102, 241, 0.75)', width: 2.2 }, // Indigo
      { freq: 0.022, amp: 22, speed: 0.045, color: 'rgba(168, 85, 247, 0.65)', width: 1.8 }, // Purple
      { freq: 0.011, amp: 35, speed: 0.02, color: 'rgba(56, 189, 248, 0.8)', width: 2.5 },  // Cyan
      { freq: 0.028, amp: 18, speed: 0.05, color: 'rgba(236, 72, 153, 0.55)', width: 1.5 }, // Pink
    ];

    // Floating neural nodes
    const nodes = Array.from({ length: 18 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    function resize() {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx?.scale(dpr, dpr);
    }

    // Dynamic wave modulation with Anime.js
    const waveModulator = { ampMultiplier: 1, freqMultiplier: 1 };
    const waveAnim = animate(waveModulator, {
      ampMultiplier: [0.8, 1.35, 0.9, 1.2],
      freqMultiplier: [0.9, 1.25, 0.95, 1.1],
      duration: 5000,
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });

    // Beacon pulse animation
    if (beaconRef.current) {
      animate(beaconRef.current, {
        scale: [1, 1.6, 1],
        opacity: [1, 0.3, 1],
        duration: 1800,
        loop: true,
        ease: 'inOutQuad',
      });
    }

    function render() {
      if (!canvas || !ctx || !container) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Soft trail clear for persistence effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.fillRect(0, 0, w, h);

      // Subtle cybernetic grid lines
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.15)';
      ctx.lineWidth = 1;
      const gridStep = 32;
      for (let x = 0; x < w; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw floating neural nodes and connections
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;

        const nx = node.x * w;
        const ny = node.y * h;

        ctx.fillStyle = `rgba(147, 197, 253, ${node.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw harmonic wave strands
      const centerY = h * 0.72; // Position wave slightly in lower half

      waveParams.forEach((wave, idx) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = wave.width;
        ctx.strokeStyle = wave.color;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 12;

        const effectiveAmp = wave.amp * waveModulator.ampMultiplier;
        const effectiveFreq = wave.freq * waveModulator.freqMultiplier;

        for (let x = 0; x <= w; x += 4) {
          const envelope = Math.sin((x / w) * Math.PI); // Pinched at card ends
          const y =
            centerY +
            Math.sin(x * effectiveFreq + time * wave.speed + idx * 1.2) *
              effectiveAmp *
              envelope +
            Math.cos(x * 0.008 + time * 0.015) * 8 * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);
    resize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      waveAnim.revert();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl flex flex-col p-8 flex-1 border border-indigo-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl group transition-all duration-300 hover:border-indigo-500/50"
      >
        {/* Animated Canvas Wave in background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
        />

        {/* Ambient radial lighting overlays */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Work With Me
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 backdrop-blur">
              <span ref={beaconRef} className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
              <Radio className="w-3 h-3 text-cyan-400" />
              <span>Available for Roles</span>
            </span>
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed text-sm flex-1">
            I am open to internships, research collaborations, and product engineering roles where the work is real and the bar is high. I have shipped ML pipelines across 58M+ records, built event-driven platforms processing 63K+ simulations per task, and delivered production apps serving 100+ users. If you are building something that matters or evaluating technical talent seriously, let us connect.
          </p>

          <div className="space-y-3 mt-auto">
            <GradientButton asChild className="w-full">
              <a href="mailto:mjenius1357@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </GradientButton>

            <GradientButton asChild variant="variant" className="w-full">
              <a href="Mevin%20Jose%20Resume.pdf" download className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}
