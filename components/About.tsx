import React, { useState } from 'react';
import { ABOUT, PERSONAL_INFO } from '../lib/constants';
import { Cpu, Globe } from 'lucide-react';
import { TextAnimate } from './TextAnimate';

const About: React.FC = () => {
  // Fallback image state in case the provided URL fails
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 md:py-20 relative z-10 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
            Engineering Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left: Photo / ID Card Style */}
          <div className="md:col-span-5 relative group">
            {/* Decorative Borders */}
            <div className="absolute -inset-1 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-2xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="absolute -inset-[1px] bg-gradient-to-b from-emerald-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

            <div className="relative bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 p-2">
              <div className="relative overflow-hidden rounded-lg bg-zinc-900 aspect-[4/5]">
                {/* Image */}
                {!imgError ? (
                  <img
                    src={ABOUT.imageUrl}
                    alt={PERSONAL_INFO.name}
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-600 font-mono text-xs p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 mb-4 animate-pulse"></div>
                    <span>[IMG_LOAD_FAIL]</span>
                    <span className="mt-2 text-[10px] opacity-50">{ABOUT.imageUrl}</span>
                  </div>
                )}

                {/* Overlay Scan effect - purely decorative */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="md:col-span-7 space-y-8">
            {/* Animated Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              <TextAnimate text="Crafting Intelligent Solutions" />
            </h2>

            {/* Animated Bio Paragraphs */}
            <div className="space-y-6 leading-relaxed">
              {ABOUT.bioParagraphs.map((paragraph, idx) => (
                <TextAnimate
                  key={idx}
                  text={paragraph}
                  className="block border-l-2 border-zinc-900 pl-4 text-zinc-400"
                  delay={0.2 + (idx * 0.1)}
                />
              ))}
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-zinc-900">
              <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-emerald-500">
                  <Cpu className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase">Focus</span>
                </div>
                <ul className="space-y-1.5">
                  {PERSONAL_INFO.aboutJson.current_focus.split(',').map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                      <span className="leading-tight">{item.trim().replace('&', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-emerald-500">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase">Location</span>
                </div>
                <p className="text-sm text-zinc-300">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;