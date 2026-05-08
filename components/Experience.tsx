'use client';

import React from 'react';
import { EXPERIENCE } from '../lib/constants';
import { Experience } from '../lib/types';
import { Briefcase, MapPin, Calendar, Code2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { CardSpotlight } from './CardSpotlight';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">Work Experience</span>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Professional Journey</h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Real-world engineering experience building enterprise-grade products that ship to production.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((exp, index) => (
            <RevealOnScroll key={index} variant="fade-up" delay={index * 100}>
              <ExperienceCard experience={exp} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <CardSpotlight
      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-0"
      color="rgba(16, 185, 129, 0.15)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">

        {/* LEFT: Identity, meta, tech (4 cols) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-1">
              {experience.role}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span className="text-emerald-400 font-semibold text-sm">{experience.company}</span>
            </div>

            <div className="font-mono text-[11px] text-zinc-500 mb-6">
              {experience.department}
              <span className="mx-1.5 text-zinc-700">·</span>
              {experience.domain}
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                <Calendar className="h-3 w-3 shrink-0" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                <MapPin className="h-3 w-3 shrink-0" />
                <span>{experience.mode}</span>
              </div>
            </div>

            <span className="inline-block font-mono text-xs text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 capitalize">
              {experience.type}
            </span>
          </div>

          {/* Tech stack pushed to bottom */}
          <div className="mt-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-zinc-800/50">
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Built With</p>
            <div className="flex flex-wrap gap-1.5">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="cursor-default px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Description (8 cols) */}
        <div className="lg:col-span-8">
          <div className="h-full bg-zinc-900/30 rounded-xl border border-zinc-800/50 p-6 relative overflow-hidden group-hover:border-zinc-700/50 transition-colors">

            <div className="flex items-center gap-2 mb-4 opacity-70">
              <Code2 className="h-4 w-4 text-emerald-500" />
              <span className="font-mono text-xs text-zinc-400">responsibilities.md</span>
            </div>

            <div className="space-y-4">
              {experience.description.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                  <p className="text-base leading-relaxed text-zinc-300 font-light">{point}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-800/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </CardSpotlight>
  );
};

export default ExperienceSection;
