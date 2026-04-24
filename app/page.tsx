'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative w-full overflow-hidden">
        <img
          src="/hero.png"
          alt="MK DEL3TE neon cyberpunk homepage"
          className="block h-auto w-full object-contain"
        />

        <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-6 py-5 text-[10px] font-semibold tracking-[0.28em] text-white/85 md:px-10 md:text-xs">
          <a href="#top" className="font-black text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,.9)]">
            MK DEL3TE
          </a>

          <div className="hidden gap-7 md:flex">
            <a href="#top" className="hover:text-cyan-300">HOME</a>
            <a href="#music" className="hover:text-cyan-300">MUSIC</a>
            <a href="#live" className="hover:text-cyan-300">LIVE</a>
            <a href="https://project-records.com" target="_blank" rel="noreferrer" className="hover:text-fuchsia-300">PROJECT RECORDS</a>
            <a href="#about" className="hover:text-cyan-300">ABOUT</a>
            <a href="#contact" className="hover:text-cyan-300">CONTACT</a>
          </div>
        </nav>

        <div className="absolute bottom-[8%] left-0 z-10 flex w-full justify-center">
          <a
            href="https://project-records.com"
            target="_blank"
            rel="noreferrer"
            className="border border-fuchsia-400/90 bg-black/30 px-7 py-3 text-[10px] font-bold tracking-[0.28em] text-white shadow-[0_0_18px_rgba(255,0,220,.45)] backdrop-blur-sm transition hover:border-cyan-300 hover:bg-cyan-400/10 md:text-xs"
          >
            PROJECT RECORDS
          </a>
        </div>
      </section>
    </main>
  );
}
