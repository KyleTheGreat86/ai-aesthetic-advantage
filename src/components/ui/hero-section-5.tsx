
'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Logos3 } from '@/components/ui/logos3'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

export function HeroSection() {
    const handleCalculatorClick = () => {
        const calculatorSection = document.getElementById('roi-calculator');
        if (calculatorSection) {
            calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const medicalBillingLogos = [
        {
            id: "medisoft",
            description: "Medisoft",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        },
        {
            id: "athenahealth",
            description: "athenahealth",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        },
        {
            id: "epic",
            description: "Epic",
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        },
        {
            id: "cerner",
            description: "Cerner",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        },
        {
            id: "nextgen",
            description: "NextGen",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        },
        {
            id: "allscripts",
            description: "Allscripts",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=80&fit=crop&auto=format",
            className: "h-8 w-auto opacity-60"
        }
    ];

    return (
        <main className="overflow-x-hidden bg-black min-h-screen">
            <section className="relative">
                <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white">
                                Medical Billing Companies Save <span className="text-eagle-orange">$5,000+</span> Per Month
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
                    
                    {/* Benefits Grid */}
                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm md:text-base max-w-4xl mx-auto">
                            <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
                                <div className="text-eagle-orange font-semibold">✅ $5,000+ Monthly Savings</div>
                                <div className="text-white/80">Slash labor costs from $3.50 to $0.50 per claim</div>
                            </div>
                            <div className="bg-eagle-blue/20 p-4 rounded-lg border border-eagle-blue/30">
                                <div className="text-eagle-blue font-semibold">✅ Process 100+ Claims/Hour</div>
                                <div className="text-white/80">vs. 4-7 manually per biller</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                <div className="text-white font-semibold">✅ Zero Software Changes</div>
                                <div className="text-white/80">Works with your current PM system</div>
                            </div>
                            <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
                                <div className="text-eagle-orange font-semibold">✅ 99.9% Accuracy</div>
                                <div className="text-white/80">Eliminates $25 denial costs from keying errors</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-eagle-orange/20 to-eagle-blue/20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto border border-eagle-orange/30">
                            <p className="text-lg md:text-xl font-bold text-white text-center">
                                "Processing 3,000 claims/month? You're spending <span className="text-eagle-orange">$10,500</span>. We'll do it for <span className="text-eagle-blue">$1,500</span>."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-eagle-dark pb-2">
                <Logos3 
                    heading="Works with your existing Practice Management System"
                    logos={medicalBillingLogos}
                    className="py-8"
                />
            </section>
        </main>
    )
}
