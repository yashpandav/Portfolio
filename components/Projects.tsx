
import React from 'react';
import { PROJECTS } from '../lib/constants';
import { Project } from '../types';
import { Github, Code2, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { CardSpotlight } from './CardSpotlight';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-500"></div>
              <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">Selected Work</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Featured Projects</h2>
            <p className="text-zinc-400 max-w-xl mt-4 leading-relaxed">
              Full-stack applications and autonomous agents.
              Architected for scalability, performance, and intelligent automation.
            </p>
          </div>
          <a href="https://github.com/yashpandav?tab=repositories" target="_blank" rel="noreferrer" className="hidden md:flex font-mono text-xs text-zinc-400 hover:text-white items-center gap-2 transition-colors border border-zinc-800 px-4 py-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 group">
            <Github className="h-3 w-3 group-hover:text-emerald-500 transition-colors" /> view_all_repositories
          </a>
        </div>

        {/* Vertical List Layout */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} variant="fade-up">
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:hidden mt-12 text-center">
          <a href="https://github.com/yashpandav?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex font-mono text-xs text-zinc-400 hover:text-white items-center gap-2 transition-colors border border-zinc-800 px-6 py-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 group">
            <Github className="h-3 w-3 group-hover:text-emerald-500 transition-colors" /> View All Repositories
          </a>
        </div>

      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardSpotlight
      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-0"
      color="rgba(16, 185, 129, 0.15)" // Emerald spotlight
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">

        {/* LEFT SIDE: Identity, Links, Tech (4 cols) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                {project.date}
              </span>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                              group flex items-center gap-2 px-4 py-2.5 rounded-lg 
                              bg-zinc-900 border border-zinc-700 
                              text-zinc-300 text-sm font-medium 
                              hover:bg-zinc-800 hover:text-white hover:border-emerald-500/50 
                              transition-all duration-300 shadow-sm
                            "
                >
                  <ExternalLink className="h-3.5 w-3.5 group-hover:text-emerald-500 transition-colors" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="
                              group flex items-center gap-2 px-4 py-2.5 rounded-lg 
                              bg-transparent border border-zinc-800 
                              text-zinc-400 text-sm font-medium 
                              hover:bg-zinc-900 hover:text-white hover:border-zinc-600 
                              transition-all duration-300
                            "
                >
                  <Github className="h-3.5 w-3.5 group-hover:text-white transition-colors" />
                  <span>Source</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack (Pushed to bottom on desktop) */}
          <div className="mt-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-zinc-800/50">
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Built With</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="
                              cursor-default
                              px-2.5 py-1 
                              text-[11px] font-mono 
                              rounded-md
                              bg-zinc-900
                              border border-zinc-800
                              text-zinc-400
                              transition-all duration-200
                              hover:bg-zinc-800
                              hover:text-white
                              hover:border-zinc-600
                              group-hover/chip:border-zinc-700
                            "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Description / Context (8 cols) */}
        <div className="lg:col-span-8">
          <div className="h-full bg-zinc-900/30 rounded-xl border border-zinc-800/50 p-6 relative overflow-hidden group-hover:border-zinc-700/50 transition-colors">

            {/* Decorative Terminal Header */}
            <div className="flex items-center gap-2 mb-4 opacity-70">
              <Code2 className="h-4 w-4 text-emerald-500" />
              <span className="font-mono text-xs text-zinc-400">README.md</span>
            </div>

            <div className="space-y-4">
              {project.description.map((desc, i) => (
                <p key={i} className="text-base leading-relaxed text-zinc-300 font-light">
                  {desc}
                </p>
              ))}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-800/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </CardSpotlight>
  );
};

export default Projects;
