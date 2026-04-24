'use client';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Neon tunnel background */}
      <div className="absolute inset-0 flex justify-between px-10 opacity-90">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[40px] bg-cyan-400 blur-[1px] opacity-80" />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[40px] bg-pink-500 blur-[1px] opacity-90" />
          ))}
        </div>
      </div>

      {/* Main logo */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">

        <div className="text-[8vw] font-bold tracking-widest glitch">
          MK DEL3TE
        </div>

        {/* reflection */}
        <div className="text-[8vw] font-bold tracking-widest opacity-20 scale-y-[-1] blur-sm">
          MK DEL3TE
        </div>

        <a
          href="https://project-records.com"
          target="_blank"
          className="mt-10 px-6 py-3 border border-pink-500 hover:bg-pink-500/20 transition"
        >
          PROJECT RECORDS
        </a>
      </section>

      {/* Latest release */}
      <section className="relative z-10 text-center pb-32">
        <h2 className="text-pink-400 tracking-widest mb-10">LATEST RELEASE</h2>

        <div className="flex flex-col items-center gap-6">
          <div className="w-64 h-64 border border-pink-500 flex items-center justify-center">
            <span className="text-sm">GLITCH REALITY ART</span>
          </div>

          <div>
            <h3 className="text-xl">GLITCH REALITY</h3>
            <p className="text-pink-400">OUT NOW</p>
          </div>

          <button className="px-6 py-2 border border-cyan-400 hover:bg-cyan-400/20 transition">
            LISTEN NOW
          </button>
        </div>
      </section>

      {/* styles */}
      <style jsx global>{`
        .glitch {
          position: relative;
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #f0f;
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </main>
  );
}
