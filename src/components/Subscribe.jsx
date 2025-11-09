import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="subscribe" className="bg-black text-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Join the private list</h2>
        <p className="mt-3 text-zinc-400">Be the first to hear new music, tour announcements, and exclusive drops.</p>

        <form onSubmit={handleSubmit} className="mt-8 mx-auto flex w-full max-w-xl items-center gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-white/30 focus:outline-none"
              aria-label="Email address"
            />
          </div>
          <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-zinc-200">
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-emerald-400">Thanks for subscribing! Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-400">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  );
}
