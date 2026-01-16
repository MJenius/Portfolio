import { useEffect, useRef } from 'react';
import { GradientButton } from './gradient-button';

export default function SchemaCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let time = 0;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = (py + 1) * canvas.height / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative overflow-hidden rounded-2xl flex flex-col p-8 flex-1" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1.5px solid rgba(79, 70, 229, 0.4)', backdropFilter: 'blur(10px)' }}>
        <h3 className="text-2xl font-bold text-white mb-3">Work With Me</h3>
        
        <p className="text-slate-300 mb-8 leading-relaxed text-sm flex-1">
          I'm interested in internships, research collaborations, and early-stage product work where engineering quality and real-world impact matter. If you're building something serious—or evaluating technical talent—I'd be happy to connect.
        </p>
        
        <div className="space-y-3 mt-auto">
          <GradientButton 
            asChild
            className="w-full"
          >
            <a href="mailto:mjenius1357@gmail.com" className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </GradientButton>
          
          <GradientButton 
            asChild
            variant="variant"
            className="w-full"
          >
            <a href="Mevin%20Jose%20Resume.pdf" download className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
