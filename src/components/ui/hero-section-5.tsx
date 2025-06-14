
'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Case } from '@/components/ui/cases-with-infinite-scroll'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import { GlowingCard } from '@/components/ui/glowing-card'
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

export function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentAmount, setCurrentAmount] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    
    const fullText = "Medical Billing Companies Save ";
    const targetAmount = 5000;

    // Typewriter effect
    useEffect(() => {
        let currentIndex = 0;
        const typeTimer = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typeTimer);
                // Start counter animation after text is complete
                startCounterAnimation();
            }
        }, 80); // Adjust speed as needed

        return () => clearInterval(typeTimer);
    }, []);

    // Counter animation
    const startCounterAnimation = () => {
        let startTime: number;
        const duration = 3000; // 3 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out animation
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeProgress * targetAmount);
            
            setCurrentAmount(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    };

    // Cursor blinking effect
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, []);

    const handleCalculatorClick = () => {
        const calculatorSection = document.getElementById('roi-calculator');
        if (calculatorSection) {
            calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="overflow-x-hidden bg-black min-h-screen">
            <section className="relative">
                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white">
                                {displayedText}
                                <span className="text-eagle-orange">
                                    ${currentAmount.toLocaleString()}+
                                </span>
                                {displayedText.length < fullText.length && showCursor && (
                                    <span className="text-eagle-blue animate-pulse">|</span>
                                )}
                                <br />
                                Per Month
                            </h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-white/90">
                                While Cutting CMS-1500 Time from <span className="text-eagle-blue">8 Minutes</span> to <span className="text-eagle-orange">90 Seconds</span>
                            </p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base bg-eagle-blue hover:bg-eagle-blue/90">
                                    <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
                                        <span className="text-nowrap">Process 100 Claims FREE</span>
                                        <ChevronRight className="ml-1" />
                                    </a>
                                </Button>
                                <Button
                                    key={2}
                                    size="lg"
                                    onClick={handleCalculatorClick}
                                    className="h-12 rounded-full px-5 pr-3 text-base bg-eagle-blue hover:bg-eagle-blue/90 text-white">
                                    <span className="text-nowrap">Calculate My Exact Savings</span>
                                    <ChevronRight className="ml-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    {/* DNA Style Video Background Animation */}
                    <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-white/10 sm:aspect-video lg:rounded-[3rem]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="size-full object-cover opacity-30 dark:opacity-20"
                            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477">
                        </video>
                        {/* Overlay to blend with medical theme */}
                        <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/20 via-transparent to-eagle-orange/20"></div>
                    </div>
                    
                    {/* Benefits Grid with Glowing Effects */}
                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm md:text-base max-w-4xl mx-auto">
                            <GlowingCard intensity="medium">
                                <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
                                    <div className="text-eagle-orange font-semibold">✅ $5,000+ Monthly Savings</div>
                                    <div className="text-white/80">Slash labor costs from $3.50 to $0.50 per claim</div>
                                </div>
                            </GlowingCard>
                            <GlowingCard intensity="medium">
                                <div className="bg-eagle-blue/20 p-4 rounded-lg border border-eagle-blue/30">
                                    <div className="text-eagle-blue font-semibold">✅ Process 100+ Claims/Hour</div>
                                    <div className="text-white/80">vs. 4-7 manually per biller</div>
                                </div>
                            </GlowingCard>
                            <GlowingCard intensity="medium">
                                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                    <div className="text-white font-semibold">✅ Zero Software Changes</div>
                                    <div className="text-white/80">Works with your current PM system</div>
                                </div>
                            </GlowingCard>
                            <GlowingCard intensity="medium">
                                <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
                                    <div className="text-eagle-orange font-semibold">✅ 99.9% Accuracy</div>
                                    <div className="text-white/80">Eliminates $25 denial costs from keying errors</div>
                                </div>
                            </GlowingCard>
                        </div>

                        <GlowingCard intensity="strong">
                            <div className="bg-gradient-to-r from-eagle-orange/20 to-eagle-blue/20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto border border-eagle-orange/30">
                                <p className="text-lg md:text-xl font-bold text-white text-center">
                                    "Processing 3,000 claims/month? You're spending <span className="text-eagle-orange">$10,500</span>. We'll do it for <span className="text-eagle-blue">$1,500</span>."
                                </p>
                            </div>
                        </GlowingCard>
                    </div>
                </div>
            </section>
            
            <section className="bg-black pb-2">
                <Case />
            </section>
        </main>
    )
}
