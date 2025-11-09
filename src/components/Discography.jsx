import React from 'react';
import { PlayCircle, ExternalLink } from 'lucide-react';

const releases = [
  {
    title: 'Nocturne I',
    year: '2025',
    type: 'Single',
    cover:
      'https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1600&auto=format&fit=crop',
    links: {
      spotify: '#',
      apple: '#',
    },
  },
  {
    title: 'Monochrome',
    year: '2024',
    type: 'EP',
    cover:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
    links: {
      spotify: '#',
      apple: '#',
    },
  },
  {
    title: 'Analog Heart',
    year: '2023',
    type: 'Album',
    cover:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
    links: {
      spotify: '#',
      apple: '#',
    },
  },
];

export default function Discography() {
  return (
    <section id="discography" className="relative w-full bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Discography</h2>
            <p className="mt-2 text-zinc-400">Selected releases across years</p>
          </div>
          <a href="#" className="text-sm text-zinc-300 hover:text-white inline-flex items-center gap-2">
            Full Catalog <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((r) => (
            <article key={r.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.cover} alt={r.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{r.title}</h3>
                  <span className="text-xs text-zinc-400">{r.year} • {r.type}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={r.links.spotify} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200">
                    <PlayCircle size={16} /> Play
                  </a>
                  <a href={r.links.apple} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white hover:border-white hover:bg-white/10">
                    Open
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
