/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Menu, X, Ticket, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const TRACKS = [
  { id: 1, title: "Wildflower", duration: "11:11" },
  { id: 2, title: "See me in a crown", duration: "3:00" },
  { id: 3, title: "Bad Guy", duration: "3:14" },
  { id: 4, title: "Duh", duration: "2:58" },
  { id: 5, title: "When the party is over", duration: "3:16" },
  { id: 6, title: "Betrayal", duration: "4:05" },
];

const TOUR_DATES = [
  { date: "NOV 11", city: "HUSTVILLIE", country: "US" },
  { date: "NOV 12", city: "ATLANTA", country: "US" },
  { date: "NOV 13", city: "LAKE BUENA", country: "US" },
  { date: "NOV 14", city: "VA", country: "US" },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(TRACKS[0]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <button className="text-xs uppercase tracking-[0.4em] border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
          Check Tickets
        </button>
        <Menu className="w-6 h-6 cursor-pointer" />
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80"
            alt="Artist Hero"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        
        <div className="absolute bottom-24 left-10 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.2, y: 0 }}
            className="text-[12rem] font-black tracking-tighter leading-none select-none hidden md:block"
          >
            BILLIE
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.2, y: 0 }}
            className="text-8xl font-black tracking-tighter leading-none select-none md:hidden"
          >
            BILLIE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs tracking-[0.5em] uppercase text-gray-400 mt-4 px-2"
          >
            Upcoming Events
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-1 p-1 bg-black">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="aspect-square relative group overflow-hidden"
          >
            <img 
              src={`https://images.unsplash.com/${i === 1 ? 'photo-1475924156731-49816043ae19' : i === 2 ? 'photo-1543722530-d2c32013a1e6' : i === 3 ? 'photo-1534796636912-3b95b3ab5986' : i === 4 ? 'photo-1464822759023-fed622ff2c3b' : 'photo-1419242902214-272b3f66ee7a'}?auto=format&fit=crop&q=80&w=600`}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </section>

      {/* Events Description Section */}
      <section className="max-w-7xl mx-auto px-10 py-32 space-y-32">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold uppercase tracking-widest">Minix Tour 2025</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Billie Eilish coming to Paris, Jurassic, Delusion State for the launch of her new album 'MINI RROAR', performing live on state book your tickets on 15 March 2025 on our website.
            </p>
            <div className="relative aspect-video overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1459749411177-042180ce8a95?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-black italic tracking-tighter opacity-80 mix-blend-overlay">TOUR</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold uppercase tracking-widest">'One By One' Tour 2025</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Exclusive VIP one by one conversation tour soon with your fav billie on tour records in 5 countries. details given soon stay tuned and contact support team for more private info.
            </p>
            <div className="relative aspect-video overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-center text-center">
                  <span className="text-6xl md:text-8xl font-black italic tracking-tighter opacity-80 leading-none mix-blend-overlay">TOUR<br/>EVENT</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="bg-[#050505] py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center">
             {/* Spinning Vinyl */}
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                <motion.div 
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-[1.5rem] border-[#111] bg-[#0a0a0a] shadow-2xl flex items-center justify-center overflow-hidden"
                >
                  {/* Vinyl Grooves effect */}
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)]" />
                   <div className="absolute inset-8 border border-white/5 rounded-full" />
                   <div className="absolute inset-16 border border-white/5 rounded-full" />
                   <div className="absolute inset-24 border border-white/5 rounded-full" />
                   
                   {/* Album Art Center */}
                   <div className="w-1/3 h-1/3 rounded-full overflow-hidden border-4 border-black z-10">
                      <img 
                        src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80" 
                        alt="Album Art"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </motion.div>
             </div>
          </div>

          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-1">Track Listening</h1>
              <p className="text-gray-500 text-sm tracking-widest uppercase">Albums</p>
            </div>

            <div className="space-y-2">
              {TRACKS.map((track) => (
                <button 
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  className={`w-full group text-left px-4 py-2 transition-all flex justify-between items-center ${activeTrack.id === track.id ? 'bg-cyan-600' : 'hover:bg-white/5'}`}
                >
                  <span className={`text-lg font-medium ${activeTrack.id === track.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {track.id}. {track.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-[#111] p-8 border border-white/5 space-y-6">
               <div className="flex justify-between items-end">
                  <span className="text-xs text-cyan-500 uppercase tracking-widest font-mono">{activeTrack.title}</span>
               </div>
               <div className="w-full h-0.5 bg-gray-800 relative">
                  <motion.div 
                    initial={{ width: "10%" }}
                    animate={{ width: isPlaying ? "80%" : "30%" }}
                    className="absolute inset-y-0 h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
               </div>
               <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>1:11</span>
                  <span>{activeTrack.duration}</span>
               </div>
               <div className="flex justify-center items-center gap-10">
                  <button className="text-gray-400 hover:text-white transition-colors"><SkipBack /></button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors"><SkipForward /></button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section className="py-40 bg-black overflow-hidden px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-20 italic">Tour Dates</h2>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
                alt="Musician"
                className="w-full grayscale opacity-40 rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <div className="space-y-0 divide-y divide-white/10 uppercase">
              {TOUR_DATES.map((tour, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-10 flex flex-col sm:flex-row items-center justify-between group gap-6"
                >
                  <div className="flex gap-10 items-center">
                    <span className="text-cyan-600 font-bold text-xs shrink-0">{tour.date}</span>
                    <span className="text-xl font-medium tracking-widest leading-none">{tour.city} · {tour.country}</span>
                  </div>
                  <button className="w-full sm:w-auto bg-cyan-600 text-white text-[10px] font-bold px-8 py-3 tracking-widest hover:bg-cyan-500 transition-colors">
                    Book Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-20 border-t border-white/5 text-center">
        <p className="text-[10px] tracking-[0.6em] text-gray-600 uppercase">
          © 2025 Artist Music Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
