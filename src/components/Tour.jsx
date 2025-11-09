import React from 'react';
import { MapPin, Calendar, Ticket } from 'lucide-react';

const dates = [
  { city: 'Berlin, DE', venue: 'Tempodrom', date: 'May 21, 2025' },
  { city: 'Paris, FR', venue: 'Le Trianon', date: 'Jun 02, 2025' },
  { city: 'New York, US', venue: 'Brooklyn Steel', date: 'Jun 18, 2025' },
  { city: 'Tokyo, JP', venue: 'LIQUIDROOM', date: 'Jul 05, 2025' },
];

export default function Tour() {
  return (
    <section id="tour" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Tour</h2>
            <p className="mt-2 text-zinc-400">Upcoming performances</p>
          </div>
          <a href="#" className="text-sm text-zinc-300 hover:text-white inline-flex items-center gap-2">
            Get Alerts <Calendar size={16} />
          </a>
        </div>
        <div className="divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
          {dates.map((d) => (
            <div key={d.city + d.date} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 px-6 py-5">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-zinc-400" />
                <div>
                  <p className="font-medium">{d.city}</p>
                  <p className="text-sm text-zinc-400">{d.venue}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300">{d.date}</p>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200">
                <Ticket size={16} /> Tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
