import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-xl font-semibold">Artist</h3>
            <p className="mt-3 text-zinc-400 max-w-sm">Minimal, monochrome, and built for timeless presence. Management and booking info below.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-zinc-400">Management</h4>
            <p className="mt-2 text-sm">manager@artist.com</p>
            <h4 className="mt-6 text-sm uppercase tracking-wider text-zinc-400">Booking</h4>
            <p className="mt-2 text-sm">booking@artist.com</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-zinc-400">Follow</h4>
            <div className="mt-3 flex items-center gap-4">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-white/10 hover:border-white/30">
                <Instagram size={18} />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-white/10 hover:border-white/30">
                <Twitter size={18} />
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-full border border-white/10 hover:border-white/30">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Artist — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
