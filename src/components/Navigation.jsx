import React from 'react';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-widest text-white uppercase">Artist</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#discography" className="hover:text-white transition">Music</a>
          <a href="#tour" className="hover:text-white transition">Tour</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#subscribe" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white hover:bg-white/10 transition">Subscribe</a>
      </div>
    </header>
  );
}
