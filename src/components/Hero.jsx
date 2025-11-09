import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 py-16">
        <p className="mb-4 text-sm tracking-[0.35em] text-zinc-300 uppercase">New Single Out Now</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Timeless Sound.
          <br />
          Modern Presence.
        </h1>
        <p className="mt-5 max-w-2xl text-zinc-300">
          A black & white, modern yet classical aesthetic for artists who let the music speak first.
          Explore releases, tour dates, and join the private list for early drops.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#discography"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Listen Now <Play size={18} />
          </a>
          <a
            href="#tour"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            View Tour <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
