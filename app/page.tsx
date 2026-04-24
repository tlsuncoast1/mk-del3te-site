'use client';

const navItems = ['HOME', 'MUSIC', 'LIVE', 'PROJECT RECORDS', 'ABOUT', 'CONTACT'];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020006] text-white selection:bg-fuchsia-500/40">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,210,.18),transparent_32%),radial-gradient(circle_at_12%_36%,rgba(0,217,255,.18),transparent_28%),radial-gradient(circle_at_88%_38%,rgba(255,0,170,.16),transparent_28%),linear-gradient(180deg,#020006_0%,#04000b_55%,#000_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[.18] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:100%_6px]" />

      <Header />
      <Hero />
      <LatestRelease />
      <About />
      <ProjectRecords />
      <Footer />

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #000; }

        .glitch-logo {
          position: relative;
          color: #17eaff;
          text-shadow:
            0 0 8px rgba(23,234,255,.95),
            0 0 22px rgba(23,234,255,.7),
            0 0 42px rgba(255,0,220,.55);
          animation: logoPulse 3.4s ease-in-out infinite;
        }

        .glitch-logo::before,
        .glitch-logo::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .78;
          mix-blend-mode: screen;
        }

        .glitch-logo::before {
          color: #ff24e6;
          transform: translate(3px, 0);
          clip-path: polygon(0 8%,100% 8%,100% 18%,0 18%,0 42%,100% 42%,100% 50%,0 50%,0 74%,100% 74%,100% 83%,0 83%);
          animation: glitchA 1.35s infinite steps(2,end);
        }

        .glitch-logo::after {
          color: #00f6ff;
          transform: translate(-3px, 0);
          clip-path: polygon(0 24%,100% 24%,100% 33%,0 33%,0 58%,100% 58%,100% 66%,0 66%,0 88%,100% 88%,100% 96%,0 96%);
          animation: glitchB 1.85s infinite steps(2,end);
        }

        .water-reflection {
          transform: scaleY(-1);
          opacity: .28;
          filter: blur(1.5px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.9), rgba(0,0,0,.28), transparent 78%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,.9), rgba(0,0,0,.28), transparent 78%);
          animation: waterMove 4s ease-in-out infinite;
        }

        .water-surface {
          background:
            repeating-radial-gradient(ellipse at center, rgba(0,255,255,.25) 0 1px, transparent 2px 18px),
            linear-gradient(90deg, rgba(0,220,255,.28), rgba(255,0,210,.35), rgba(0,220,255,.18));
          filter: blur(.2px);
          animation: shimmer 5s linear infinite;
        }

        .neon-card {
          box-shadow: 0 0 24px rgba(0,225,255,.18), inset 0 0 24px rgba(255,0,210,.08);
        }

        .neon-button {
          box-shadow: 0 0 18px rgba(0,225,255,.26), inset 0 0 16px rgba(255,0,210,.13);
        }

        @keyframes logoPulse {
          0%,100% { filter: brightness(1); }
          50% { filter: brightness(1.25); }
        }
        @keyframes glitchA {
          0%, 100% { transform: translate(2px,0); opacity:.58; }
          18% { transform: translate(10px,-2px); opacity:.9; }
          21% { transform: translate(-8px,2px); }
          52% { transform: translate(5px,1px); }
          54% { transform: translate(-12px,-1px); }
        }
        @keyframes glitchB {
          0%, 100% { transform: translate(-2px,0); opacity:.5; }
          12% { transform: translate(-9px,2px); opacity:.85; }
          14% { transform: translate(8px,-2px); }
          66% { transform: translate(-6px,-1px); }
          68% { transform: translate(12px,1px); }
        }
        @keyframes waterMove {
          0%,100% { transform: scaleY(-1) translateX(0) skewX(0deg); }
          50% { transform: scaleY(-1) translateX(8px) skewX(-2deg); }
        }
        @keyframes shimmer {
          from { background-position: 0 0, 0 0; }
          to { background-position: 220px 0, 420px 0; }
        }
      `}</style>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/25 px-5 py-4 backdrop-blur-md md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#home" className="text-xl font-black leading-none tracking-wider text-cyan-300 drop-shadow-[0_0_18px_rgba(0,255,255,.9)] md:text-2xl">
          MK<br /><span className="text-fuchsia-300">DEL3TE</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold tracking-[.32em] text-white/82 md:flex">
          {navItems.map((item) => (
            <a key={item} href={item === 'HOME' ? '#home' : item === 'PROJECT RECORDS' ? '#project-records' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-cyan-300">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-lg text-fuchsia-300 drop-shadow-[0_0_12px_rgba(255,0,220,.8)]">
          <a href="https://soundcloud.com/mkdel3te" target="_blank" rel="noreferrer">◖</a>
          <a href="https://www.youtube.com/@MkDel3te" target="_blank" rel="noreferrer">▷</a>
          <a href="https://x.com/MKDel3te" target="_blank" rel="noreferrer">𝕏</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <NeonTunnel />
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="absolute -top-12 h-[42vw] max-h-[520px] min-h-[280px] w-[42vw] min-w-[280px] max-w-[520px] rounded-full border-[3px] border-fuchsia-400/80 shadow-[0_0_45px_rgba(255,0,220,.75),inset_0_0_45px_rgba(0,220,255,.22)]" />

        <h1 data-text="MK DEL3TE" className="glitch-logo text-[18vw] font-black leading-[.82] tracking-[-.08em] md:text-[12vw] lg:text-[9rem]">
          <span className="block">MK</span>
          <span className="block">DEL3TE</span>
        </h1>

        <div data-text="MK DEL3TE" className="glitch-logo water-reflection mt-3 text-[18vw] font-black leading-[.82] tracking-[-.08em] md:text-[12vw] lg:text-[9rem]">
          <span className="block">MK</span>
          <span className="block">DEL3TE</span>
        </div>

        <div className="water-surface pointer-events-none -mt-20 h-44 w-full max-w-5xl opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_18%,transparent_84%)]" />

        <a href="https://project-records.com" target="_blank" rel="noreferrer" className="neon-button -mt-10 inline-flex border border-fuchsia-400/90 bg-black/35 px-8 py-3 text-[11px] font-bold tracking-[.3em] text-white transition hover:border-cyan-300 hover:text-cyan-200 md:-mt-6">
          PROJECT RECORDS
        </a>
      </div>
    </section>
  );
}

function NeonTunnel() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute bottom-[23%] left-0 flex h-[68%] w-[38%] items-end justify-around opacity-95 [perspective:900px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-[70%] w-[3px] rounded-full bg-cyan-300 shadow-[0_0_16px_#00eaff,0_0_34px_#00eaff]" style={{ transform: `translateY(${i * 12}px) scaleY(${1 - i * 0.025})`, opacity: 1 - i * .025 }} />
        ))}
      </div>
      <div className="absolute bottom-[23%] right-0 flex h-[68%] w-[38%] items-end justify-around opacity-95 [perspective:900px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-[70%] w-[3px] rounded-full bg-fuchsia-400 shadow-[0_0_16px_#ff19dd,0_0_38px_#ff19dd]" style={{ transform: `translateY(${(15 - i) * 12}px) scaleY(${.62 + i * 0.025})`, opacity: .65 + i * .022 }} />
        ))}
      </div>
      <div className="absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-cyan-400/80 via-fuchsia-400/80 to-cyan-400/80 shadow-[0_0_22px_rgba(255,0,220,.65)]" />
    </div>
  );
}

function LatestRelease() {
  return (
    <section id="music" className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
      <SectionTitle title="LATEST RELEASE" />
      <div className="mt-10 grid items-center gap-10 md:grid-cols-[.95fr_1fr] md:text-left">
        <div className="neon-card mx-auto aspect-square w-full max-w-sm border border-cyan-300/80 bg-black/60 p-4 shadow-fuchsia-500/20">
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(255,0,220,.18),transparent_35%),linear-gradient(135deg,rgba(0,230,255,.2),transparent_44%,rgba(255,0,210,.25))]">
            <div className="relative h-40 w-40">
              <div className="absolute inset-x-0 bottom-0 mx-auto h-[185px] w-[4px] rotate-[28deg] rounded-full bg-cyan-300 shadow-[0_0_22px_#00eaff]" />
              <div className="absolute inset-x-0 bottom-0 mx-auto h-[185px] w-[4px] -rotate-[28deg] rounded-full bg-fuchsia-400 shadow-[0_0_22px_#ff19dd]" />
              <div className="absolute bottom-0 left-1/2 h-[155px] w-[4px] -translate-x-1/2 rotate-[28deg] rounded-full bg-cyan-300 shadow-[0_0_22px_#00eaff]" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-light tracking-[.42em] text-white md:text-4xl">GLITCH REALITY</h2>
            <p className="mt-4 text-lg font-semibold tracking-[.35em] text-fuchsia-300">OUT NOW</p>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-300 to-fuchsia-400 max-md:mx-auto" />
          </div>
          <a href="https://soundcloud.com/mkdel3te" target="_blank" rel="noreferrer" className="neon-button inline-flex border border-cyan-300/90 bg-black/40 px-9 py-3 text-[12px] font-bold tracking-[.32em] transition hover:border-fuchsia-300 hover:text-fuchsia-200">
            LISTEN NOW
          </a>
          <div className="flex justify-center gap-6 text-2xl text-cyan-300 md:justify-start">
            <span>◖</span><span>▷</span><span>◉</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-4xl px-6 py-14 text-center">
      <SectionTitle title="ABOUT MK DEL3TE" />
      <p className="mx-auto mt-8 max-w-2xl text-sm uppercase leading-8 tracking-[.26em] text-white/72 md:text-base">
        Pushing boundaries with heavy basslines, glitchy aesthetics, and cinematic energy. This is more than music. This is a movement.
      </p>
    </section>
  );
}

function ProjectRecords() {
  return (
    <section id="project-records" className="relative z-10 mx-auto max-w-5xl border-t border-fuchsia-400/20 px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[220px_1fr_auto]">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-fuchsia-400 bg-black/40 text-center text-xl font-light tracking-[.26em] text-cyan-300 shadow-[0_0_28px_rgba(255,0,220,.45)]">
          PROJECT<br />RECORDS
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-light tracking-[.45em] text-fuchsia-200">PROJECT RECORDS</h2>
          <p className="mt-6 text-sm uppercase leading-8 tracking-[.28em] text-white/75">The label. The movement. The future of sound.</p>
        </div>
        <a href="https://project-records.com" target="_blank" rel="noreferrer" className="neon-button mx-auto inline-flex border border-fuchsia-400/90 bg-black/35 px-7 py-3 text-[11px] font-bold tracking-[.26em] text-white transition hover:border-cyan-300 hover:text-cyan-200 md:mx-0">
          ENTER PROJECT RECORDS
        </a>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-fuchsia-400/70" />
      <h2 className="text-xl font-light tracking-[.48em] text-fuchsia-200 md:text-2xl">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-400/70" />
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-6 pb-10 pt-6 text-center text-[11px] uppercase tracking-[.3em] text-white/50">
      <div className="mb-6 h-16 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 opacity-50 [mask-image:repeating-linear-gradient(90deg,transparent_0_4px,black_4px_6px,transparent_6px_14px)]" />
      <p className="text-white/70">Bookings & inquiries</p>
      <a className="mt-2 inline-block normal-case tracking-[.18em] text-cyan-300 underline decoration-fuchsia-400/60" href="mailto:tlsuncoast1@gmail.com">tlsuncoast1@gmail.com</a>
      <p className="mt-8">© 2026 MK DEL3TE / PROJECT RECORDS</p>
    </footer>
  );
}
