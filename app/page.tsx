'use client'
import { useEffect, useRef } from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Neon gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/3 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #ff00ff 0%, rgba(255,0,255,0.5) 25%, rgba(0,212,255,0.45) 50%, rgba(0,0,0,0) 70%)',
            filter: 'drop-shadow(0 0 80px #ff00ff)',
          }}
        />
      </div>

      {/* Animated Synth Wave Canvas */}
      <WaveCanvas />

      {/* Content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/mk-del3te-logo-white.png"
            alt="MK DEL3TE"
            className="h-28 w-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.85)]"
          />
        </div>

        {/* Radios (link chooser) */}
        <div className="w-full max-w-xl">
          <RadioLinks />
        </div>

        {/* Social strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <a className="hover:text-white/100" href="https://soundcloud.com/mkdel3te" target="_blank" rel="noreferrer">SoundCloud</a>
          <span className="opacity-40">•</span>
          <a className="hover:text-white/100" href="https://www.youtube.com/@MkDel3te" target="_blank" rel="noreferrer">YouTube</a>
          <span className="opacity-40">•</span>
          <a className="hover:text-white/100" href="https://x.com/MKDel3te" target="_blank" rel="noreferrer">X / Twitter</a>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/50 px-6 py-10 text-center">
        <p className="text-sm text-white/70">
          Bookings & collabs: <a className="font-medium text-white hover:underline" href="mailto:contact@mkdel3te.com">contact@mkdel3te.com</a>
        </p>
      </footer>

      {/* Global font stub */}
      <style jsx global>{`
        @font-face { font-family: 'OrbitronVar'; src: local('Orbitron'); font-display: swap; }
        html, body, #__next { height: 100%; }
        body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'OrbitronVar', 'Inter', 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'; }
      `}</style>
    </main>
  );
}

/** RadioLinks: simple radios that open the chosen link in a new tab */
function RadioLinks() {
  return (
    <div className="mx-auto inline-flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-2 backdrop-blur">
      <a className="rounded-xl px-4 py-2 text-sm font-semibold text-white/90 hover:text-white" href="https://soundcloud.com/mkdel3te" target="_blank" rel="noreferrer">SoundCloud</a>
      <a className="rounded-xl px-4 py-2 text-sm font-semibold text-white/90 hover:text-white" href="https://www.youtube.com/@MkDel3te" target="_blank" rel="noreferrer">YouTube</a>
      <a className="rounded-xl px-4 py-2 text-sm font-semibold text-white/90 hover:text-white" href="https://x.com/MKDel3te" target="_blank" rel="noreferrer">X / Twitter</a>
    </div>
  );
}

// === Animated Wave Canvas (neon sine layers) ===
function WaveCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(DPR, DPR);

    const waves = [
      { amp: 60, len: 0.012, speed: 0.0016, hue: 305, alpha: 0.85 }, // magenta
      { amp: 40, len: 0.018, speed: 0.0012, hue: 185, alpha: 0.75 }, // cyan
      { amp: 20, len: 0.026, speed: 0.001, hue: 275, alpha: 0.5 }, // purple
    ];
    let t = 0;

    const render = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = '#0b0b0b';
      for (let y = 0; y < h; y += 40) ctx.fillRect(0, y, w, 1);
      ctx.restore();

      waves.forEach((conf, i) => {
        ctx.save();
        const grad = ctx.createLinearGradient(0, h * 0.2, w, h * 0.8);
        grad.addColorStop(0, `hsla(${conf.hue},100%,60%,${conf.alpha})`);
        grad.addColorStop(1, `hsla(${conf.hue + 40},100%,60%,${conf.alpha * 0.7})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2 + i;
        ctx.shadowBlur = 24;
        ctx.shadowColor = `hsla(${conf.hue},100%,60%,0.8)`;
        ctx.beginPath();

        const baseline = h * 0.45 + i * 22;
        for (let x = 0; x <= w; x += 2) {
          const y = baseline + Math.sin(x * conf.len + t * conf.speed * 60) * conf.amp * Math.sin(t * conf.speed + x * 0.0008);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      });

      raf = requestAnimationFrame(render);
    };

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const DPR2 = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * DPR2;
      canvas.height = h * DPR2;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(DPR2, 0, 0, DPR2, 0, 0);
    };

    window.addEventListener('resize', onResize);
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 z-0 opacity-70" />;
}
