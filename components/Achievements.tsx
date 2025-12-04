import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS, TESTIMONIALS } from '../lib/constants';
import { Trophy, BarChart3, Zap, Award, Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Achievements: React.FC = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
   };

   const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
   };

   useEffect(() => {
      const timer = setInterval(nextTestimonial, 8000);
      return () => clearInterval(timer);
   }, []);

   return (
      <section id="achievements" className="py-16 md:py-20 relative z-10">
         <div className="max-w-6xl mx-auto px-6">

            {/* Section Header */}
            <div className="flex items-center gap-3 mb-12">
               <div className="h-px w-8 bg-emerald-500"></div>
               <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
                  Impact & Recognition
               </span>
            </div>

            {/* Layout Change: Stacked Sections instead of Split Columns */}
            <div className="flex flex-col gap-16">

               {/* 1. Testimonials Carousel (Text Only) */}
               <div className="relative w-full max-w-6xl mx-auto">
                  <RevealOnScroll variant="blur-in">
                     <div className="relative min-h-[350px] group flex flex-col justify-center">

                        {/* Slides Container - Grid Stack for Fade Effect */}
                        <div className="grid grid-cols-1 relative min-h-[300px]">
                           {TESTIMONIALS.map((testimonial, index) => (
                              <div
                                 key={index}
                                 className={`col-start-1 row-start-1 w-full flex flex-col items-center text-center transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10 scale-100 blur-0' : 'opacity-0 z-0 scale-95 blur-sm pointer-events-none'
                                    }`}
                              >

                                 <div className="mb-8">
                                    <Quote className="h-12 w-12 text-emerald-500/40" />
                                 </div>

                                 <p className="text-lg md:text-2xl text-zinc-200 leading-loose font-serif italic max-w-5xl mx-auto mb-10 tracking-wide">
                                    "{testimonial.text}"
                                 </p>

                                 {testimonial.linkedin ? (
                                    <a
                                       href={testimonial.linkedin}
                                       target="_blank"
                                       rel="noreferrer"
                                       className="flex flex-col items-center gap-4 group/profile cursor-pointer"
                                    >
                                       <div className="w-16 h-16 rounded-full border border-zinc-700 p-0.5 bg-zinc-800 shrink-0 shadow-lg shadow-emerald-900/10 group-hover/profile:border-emerald-500/50 transition-colors">
                                          <img
                                             src={testimonial.image}
                                             alt={testimonial.name}
                                             className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                          />
                                       </div>
                                       <div>
                                          <div className="text-white font-bold text-lg group-hover/profile:text-emerald-400 transition-colors">{testimonial.name}</div>
                                          <div className="text-sm font-mono text-emerald-500 uppercase tracking-tight">{testimonial.role}</div>
                                          <div className="text-xs text-zinc-500 mt-0.5">{testimonial.company}</div>
                                       </div>
                                       <div className="mt-2 text-zinc-600 group-hover/profile:text-[#0a66c2] transition-colors">
                                          <Linkedin className="h-5 w-5" />
                                       </div>
                                    </a>
                                 ) : (
                                    <div className="flex flex-col items-center gap-4">
                                       <div className="w-16 h-16 rounded-full border border-zinc-700 p-0.5 bg-zinc-800 shrink-0 shadow-lg shadow-emerald-900/10">
                                          <img
                                             src={testimonial.image}
                                             alt={testimonial.name}
                                             className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                          />
                                       </div>
                                       <div>
                                          <div className="text-white font-bold text-lg">{testimonial.name}</div>
                                          <div className="text-sm font-mono text-emerald-500 uppercase tracking-tight">{testimonial.role}</div>
                                          <div className="text-xs text-zinc-500 mt-0.5">{testimonial.company}</div>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>

                        {/* Controls - Simplified */}
                        <button
                           onClick={prevTestimonial}
                           className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-zinc-600 hover:text-emerald-500 transition-colors z-20 hidden md:block"
                           aria-label="Previous testimonial"
                        >
                           <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                           onClick={nextTestimonial}
                           className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-zinc-600 hover:text-emerald-500 transition-colors z-20 hidden md:block"
                           aria-label="Next testimonial"
                        >
                           <ChevronRight className="h-8 w-8" />
                        </button>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                           {TESTIMONIALS.map((_, idx) => (
                              <button
                                 key={idx}
                                 onClick={() => setCurrentIndex(idx)}
                                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-500 w-8' : 'bg-zinc-800 w-2 hover:bg-zinc-700'}`}
                                 aria-label={`Go to slide ${idx + 1}`}
                              />
                           ))}
                        </div>
                     </div>
                  </RevealOnScroll>
               </div>

               {/* 2. Performance Metrics (Grid of 4) */}
               <div>
                  <div className="flex items-center gap-4 mb-6">
                     <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Performance Metrics</h3>
                     <div className="h-px flex-grow bg-zinc-900"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {ACHIEVEMENTS.map((achievement, index) => (
                        <RevealOnScroll key={index} delay={index * 100} variant="scale-up">
                           <div className="group h-full bg-zinc-950 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 flex flex-col gap-3">
                              <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                                 {index === 0 ? <Trophy className="h-5 w-5" /> :
                                    index === 1 ? <Award className="h-5 w-5" /> :
                                       index === 2 ? <Zap className="h-5 w-5" /> :
                                          <BarChart3 className="h-5 w-5" />}
                              </div>
                              <div>
                                 <div className="text-sm font-bold text-zinc-200 group-hover:text-white mb-1">{achievement.title}</div>
                                 <div className="text-xs text-zinc-500 leading-snug">{achievement.description}</div>
                              </div>
                           </div>
                        </RevealOnScroll>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Achievements;