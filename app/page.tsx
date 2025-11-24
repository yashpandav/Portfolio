// This page is a client component
'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import { Preloader } from '@/components/Preloader';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { Analytics } from "@vercel/analytics/next"

// Lazy‑load heavy components
const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="min-h-screen" />,
});
const Achievements = dynamic(() => import('@/components/Achievements'), {
    loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import('@/components/Contact').then(m => ({ default: m.Contact })), {
    loading: () => <div className="min-h-[400px]" />,
});
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor').then(mod => mod.CustomCursor), { ssr: false });

// Animated background component
const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: 100 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 0 }} />;
};

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
            {/* Custom cursor – client‑only */}
            <CustomCursor />
            <Analytics />

            {isLoading ? (
                <Preloader onComplete={() => setIsLoading(false)} />
            ) : (
                <>
                    <Starfield />
                    <div className="relative z-10 animate-[fadeIn_1s_ease-out_forwards] overflow-x-hidden">
                        <Navbar />
                        <main className="space-y-0">
                            <Hero onOpenChat={() => setIsChatOpen(true)} />
                            <RevealOnScroll variant="blur-in"><About /></RevealOnScroll>
                            <RevealOnScroll variant="slide-right"><Skills /></RevealOnScroll>
                            <RevealOnScroll variant="blur-in"><Projects /></RevealOnScroll>
                            <RevealOnScroll variant="slide-left"><Achievements /></RevealOnScroll>
                        </main>
                        <RevealOnScroll variant="scale-up"><Contact /></RevealOnScroll>
                        <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
                    </div>
                </>
            )}
        </div>
    );
}