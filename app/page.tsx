'use client';

const links = {
  soundcloud: 'https://soundcloud.com/mkdel3te',
  youtube: 'https://www.youtube.com/@MkDel3te',
  x: 'https://x.com/MKDel3te',
  instagram: 'https://www.instagram.com/mkdel3te',
  spotify: 'https://open.spotify.com/search/MK%20DEL3TE',
  projectRecords: 'https://project-records.com',
  email: 'mailto:tlsuncoast1@gmail.com',
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden bg-black">
        <img src="/hero.png" alt="MK DEL3TE neon cyberpunk homepage" className="relative z-0 block h-auto w-full max-w-[1400px] object-contain" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-cyan pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-35 mix-blend-screen" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-pink pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-30 mix-blend-screen" />

        {/* Top nav hit zones */}
        <a href="#top" aria-label="Home" className="hotspot absolute left-[18.5%] top-[2.4%] z-20 h-[2.6%] w-[6.2%]" />
        <a href={links.soundcloud} target="_blank" rel="noreferrer" aria-label="Music" className="hotspot absolute left-[26.4%] top-[2.4%] z-20 h-[2.6%] w-[6.4%]" />
        <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="Live" className="hotspot absolute left-[35.1%] top-[2.4%] z-20 h-[2.6%] w-[4.8%]" />
        <a href={links.projectRecords} target="_blank" rel="noreferrer" aria-label="Project Records" className="hotspot absolute left-[42.2%] top-[2.4%] z-20 h-[2.6%] w-[15.3%]" />
        <a href={links.soundcloud} target="_blank" rel="noreferrer" aria-label="About MK DEL3TE" className="hotspot absolute left-[61.2%] top-[2.4%] z-20 h-[2.6%] w-[6.4%]" />
        <a href={links.email} aria-label="Contact MK DEL3TE" className="hotspot absolute left-[70.1%] top-[2.4%] z-20 h-[2.6%] w-[7.3%]" />

        {/* Top-right social icons */}
        <a href={links.soundcloud} target="_blank" rel="noreferrer" aria-label="Open SoundCloud" className="hotspot absolute right-[20%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full" />
        <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="Open YouTube" className="hotspot absolute right-[15.2%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full" />
        <a href={links.x} target="_blank" rel="noreferrer" aria-label="Open X" className="hotspot absolute right-[10.2%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full" />
        <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Open Instagram" className="hotspot absolute right-[5.7%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full" />
        <a href={links.spotify} target="_blank" rel="noreferrer" aria-label="Open Spotify" className="hotspot absolute right-[1.6%] top-[2.2%] z-20 h-[3.2%] w-[3.2%] rounded-full" />

        {/* Release section hit zones */}
        <a href={links.soundcloud} target="_blank" rel="noreferrer" aria-label="Listen to Glitch Reality" className="hotspot absolute left-[54%] top-[58.2%] z-20 h-[4.2%] w-[24%]" />
        <a href={links.soundcloud} target="_blank" rel="noreferrer" aria-label="Release SoundCloud" className="hotspot absolute left-[52.7%] top-[64.2%] z-20 h-[3.4%] w-[4%] rounded-full" />
        <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="Release YouTube" className="hotspot absolute left-[60.7%] top-[64.2%] z-20 h-[3.4%] w-[4%] rounded-full" />
        <a href={links.spotify} target="_blank" rel="noreferrer" aria-label="Release Spotify" className="hotspot absolute left-[68.7%] top-[64.2%] z-20 h-[3.4%] w-[4%] rounded-full" />

        {/* Project Records button + URL */}
        <a href={links.projectRecords} target="_blank" rel="noreferrer" aria-label="Enter Project Records" className="hotspot absolute bottom-[6.5%] right-[18%] z-20 h-[3.2%] w-[23%]" />
        <a href={links.projectRecords} target="_blank" rel="noreferrer" aria-label="Project Records website" className="hotspot absolute bottom-[3.9%] right-[19.8%] z-20 h-[2%] w-[18%]" />

        {/* Email */}
        <a href={links.email} aria-label="Email bookings and inquiries" className="hotspot absolute bottom-[1.8%] left-[39%] z-20 h-[2.8%] w-[22%]" />

        <div className="scanlines pointer-events-none absolute inset-0 z-30" />
        <div className="vignette pointer-events-none absolute inset-0 z-30" />
      </section>

      <style jsx global>{`
        html, body { background: #000; }
        .hotspot { cursor: pointer; border: 1px solid transparent; transition: background-color .18s ease, border-color .18s ease, box-shadow .18s ease; }
        .hotspot:hover { border-color: rgba(0,255,255,.45); background: rgba(255,0,220,.08); box-shadow: 0 0 16px rgba(255,0,220,.32); }
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
