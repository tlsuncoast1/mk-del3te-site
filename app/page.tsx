'use client';

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* NAV */}
        <div className="absolute top-0 w-full flex justify-between px-10 py-6 text-sm tracking-widest z-10">
          <div className="text-cyan-400 font-bold">MK DEL3TE</div>

          <div className="flex gap-8 text-white/80">
            <a>HOME</a>
            <a>MUSIC</a>
            <a>LIVE</a>
            <a>PROJECT RECORDS</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
          </div>
        </div>

        {/* BUTTON */}
        <div className="absolute bottom-20 w-full flex justify-center z-10">
          <a
            href="https://project-records.com"
            target="_blank"
            className="border border-pink-500 px-8 py-3 hover:bg-pink-500/20 transition"
          >
            PROJECT RECORDS
          </a>
        </div>

      </section>

    </main>
  );
}
