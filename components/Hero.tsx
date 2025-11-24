import React from 'react';
import { ArrowRight, Download, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import { Terminal, TypingAnimation, AnimatedSpan } from './Terminal';

interface HeroProps {
  onOpenChat?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Intro */}
          <div className="flex flex-col items-start justify-center space-y-8">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 backdrop-blur-md shadow-inner shadow-zinc-800/50 ml-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-300">Available for Work</span>
            </div>

            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="mt-4 pl-2 flex flex-col gap-2">
                <div className="flex flex-col [@media(min-width:470px)]:flex-row [@media(min-width:470px)]:items-center gap-2 [@media(min-width:470px)]:gap-3 [@media(min-width:1022px)]:flex-col [@media(min-width:1022px)]:items-start [@media(min-width:1022px)]:gap-1 [@media(min-width:1134px)]:flex-row [@media(min-width:1134px)]:items-center [@media(min-width:1134px)]:gap-3">
                  <p className="text-2xl md:text-3xl font-medium text-zinc-500 whitespace-nowrap">
                    {PERSONAL_INFO.role}
                  </p>
                  <span className="text-zinc-700 text-xl hidden [@media(min-width:470px)]:inline [@media(min-width:1022px)]:hidden [@media(min-width:1134px)]:inline">&</span>
                  <p className="text-2xl md:text-3xl font-medium text-zinc-500 whitespace-nowrap">
                    {PERSONAL_INFO.roleSecondary}
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-up max-w-lg pl-2" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                {PERSONAL_INFO.terminalIntro.tagline}
              </p>
            </div>

            <div className="opacity-0 flex flex-col [@media(min-width:470px)]:flex-row gap-3 [@media(min-width:470px)]:gap-4 animate-slide-up pt-2 pl-2" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="group px-6 py-3.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)]"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href='https://drive.google.com/file/d/1LiJPlb8OvMAimUihFTTWkbmjFwySdy4u/view?usp=sharing'
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 backdrop-blur-sm bg-black/30"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: MagicUI Terminal */}
          <div className="w-full opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:0.5s]">
            <Terminal className="min-h-[430px]">
              <TypingAnimation delay={500}>&gt; npm run dev</TypingAnimation>

              <AnimatedSpan delay={2000} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Optimizing assets... [Done]</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Compiling Next.js application...</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Connecting to RAG Pipeline... [Connected]</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-emerald-500 mt-2">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Initializing Personal AI Assistant...</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Loading embeddings... [OK]</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Syncing knowledge base: /about, /projects, /experience... [Synced]</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6500} className="text-emerald-500">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Spawning inference worker... [Ready]</span>
              </AnimatedSpan>

              <AnimatedSpan delay={7000} className="text-blue-400 mt-4 border-t border-dashed border-zinc-700 pt-2">
                <span className="block">ℹ AI Assistant Status: <span className="text-emerald-400 font-bold">ONLINE</span></span>
              </AnimatedSpan>

              <TypingAnimation
                delay={7500}
                className="text-emerald-500 font-bold hover:text-emerald-400 hover:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.2)] transition-all duration-300 border-b border-dashed border-emerald-500/50 hover:border-emerald-400 pb-0.5"
                onClick={onOpenChat}
              >
                &gt; Click Here to chat...
              </TypingAnimation>

            </Terminal>
          </div>

        </div>
      </div>
    </section >
  );
};

export default Hero;