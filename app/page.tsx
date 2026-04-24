'use client';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden bg-black">
        <img src="/hero.png" alt="MK DEL3TE neon cyberpunk homepage" className="relative z-0 block h-auto w-full max-w-[1400px] object-contain" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-cyan pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-35 mix-blend-screen" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-pink pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-30 mix-blend-screen" />
        <a href="https://project-records.com" target="_blank" rel="noreferrer" aria-label="Open Project Records" className="absolute bottom-[6.5%] right-[18%] z-20 h-[3.2%] w-[23%] rounded-sm border border-transparent hover:border-fuchsia-400/70 hover:bg-fuchsia-400/10" />
        <a href="https://soundcloud.com/mkdel3te" target="_blank" rel="noreferrer" aria-label="Open SoundCloud" className="absolute right-[20%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full border border-transparent hover:border-cyan-300/60" />
        <a href="https://www.youtube.com/@MkDel3te" target="_blank" rel="noreferrer" aria-label="Open YouTube" className="absolute right-[15.2%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full border border-transparent hover:border-fuchsia-300/60" />
        <a href="https://x.com/MKDel3te" target="_blank" rel="noreferrer" aria-label="Open X" className="absolute right-[10.2%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full border border-transparent hover:border-cyan-300/60" />
        <div className="scanlines pointer-events-none absolute inset-0 z-30" />
        <div className="vignette pointer-events-none absolute inset-0 z-30" />
      </section>

      <style jsx global>{`
        html, body { background: #000; }
        .glitch-layer { filter: saturate(1.35) contrast(1.08); animation-duration: 2.8s; animation-iteration-count: infinite; animation-timing-function: steps(2, end); }
        .glitch-cyan { clip-path: polygon(0 9%,100% 9%,100% 16%,0 16%,0 34%,100% 34%,100% 39%,0 39%,0 71%,100% 71%,100% 77%,0 77%); filter: hue-rotate(155deg) saturate(1.6) brightness(1.14); animation-name: glitchCyan; }
        .glitch-pink { clip-path: polygon(0 22%,100% 22%,100% 29%,0 29%,0 52%,100% 52%,100% 59%,0 59%,0 84%,100% 84%,100% 91%,0 91%); filter: hue-rotate(300deg) saturate(1.5) brightness(1.1); animation-name: glitchPink; }
        .scanlines { opacity: .16; background-image: linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px); background-size: 100% 5px; mix-blend-mode: overlay; }
        .vignette { box-shadow: inset 0 0 120px rgba(0,0,0,.65), inset 0 0 260px rgba(0,0,0,.35); }
        @keyframes glitchCyan { 0%,100%{transform:translate(0,0);opacity:.12} 8%{transform:translate(-10px,1px);opacity:.42} 10%{transform:translate(8px,-1px);opacity:.28} 42%{transform:translate(-14px,2px);opacity:.38} 44%{transform:translate(10px,0);opacity:.2} 76%{transform:translate(-7px,-1px);opacity:.34} }
        @keyframes glitchPink { 0%,100%{transform:translate(0,0);opacity:.1} 14%{transform:translate(9px,-1px);opacity:.32} 16%{transform:translate(-8px,1px);opacity:.24} 52%{transform:translate(13px,-2px);opacity:.36} 54%{transform:translate(-12px,1px);opacity:.2} 86%{transform:translate(8px,1px);opacity:.3} }
      `}</style>
    </main>
  );
}
