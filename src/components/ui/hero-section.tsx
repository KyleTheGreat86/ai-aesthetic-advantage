
'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png"

export function HeroSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStats(true), 1000);
    const timer2 = setTimeout(() => setShowTagline(true), 2000);
    const timer3 = setTimeout(() => setShowButtons(true), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen pt-24 flex items-center overflow-x-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
        
        <div className="section-container relative z-10">
          <div className="relative pb-24 pt-12 md:pb-32 lg:pb-28">
            <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <div className="mb-8">
                  <img 
                    src={eagleLogo} 
                    alt="Eagle Eye Logo" 
                    className="h-24 mx-auto lg:mx-0 animate-pulse-slow" 
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 overflow-hidden">
                  <span className="block">The</span>
                  <span className="gradient-text-blue">AI Advantage</span> for
                  <span className="gradient-text-orange block">UK Aesthetic Clinics</span>
                </h1>
                
                <div className="mb-8 flex flex-col md:flex-row justify-center lg:justify-start gap-6">
                  {showStats && (
                    <>
                      <div className="opacity-0 animate-fade-in">
                        <p className="text-2xl md:text-3xl font-bold">25+</p>
                        <p className="text-gray-400">New Google Reviews</p>
                      </div>
                      <div className="opacity-0 animate-fade-in animate-delay-200">
                        <p className="text-2xl md:text-3xl font-bold">3-5</p>
                        <p className="text-gray-400">Extra Bookings</p>
                      </div>
                      <div className="opacity-0 animate-fade-in animate-delay-400">
                        <p className="text-2xl md:text-3xl font-bold">30%</p>
                        <p className="text-gray-400">More Conversions</p>
                      </div>
                    </>
                  )}
                </div>
                
                {showTagline && (
                  <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in">
                    <span className="text-white font-medium">All Automated.</span>
                    <span className="mx-2 text-eagle-blue">Zero Staff Time.</span>
                    <span className="text-eagle-orange font-medium">Guaranteed Results.</span>
                  </p>
                )}
                
                {showButtons && (
                  <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in">
                    <a href="#contact" className="eagle-btn-primary">
                      BOOK FREE STRATEGY CALL
                    </a>
                    <a href="#pricing" className="eagle-btn-secondary">
                      START 14-DAY FREE TRIAL
                    </a>
                  </div>
                )}
              </div>
              
              {!isVideoVisible ? (
                <div 
                  className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-16 lg:order-last lg:h-max lg:w-2/3 lg:object-contain lg:pointer-events-auto"
                  onClick={() => setIsVideoVisible(true)}
                >
                  <div 
                    className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center cursor-pointer group overflow-hidden"
                    onClick={() => setIsVideoVisible(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/20 to-eagle-orange/20 group-hover:opacity-70 transition-opacity"></div>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-xl font-medium">Watch Our Video</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pointer-events-none order-first ml-auto h-56 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-16 lg:order-last lg:h-max lg:w-2/3">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg shadow-2xl"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Agency Eagle Eye Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eagle-dark to-transparent"></div>
      </section>

      <section className="bg-eagle-dark pb-16 md:pb-32">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-white/10 md:pr-6">
              <p className="text-end text-sm text-gray-400">Trusted by top UK clinics</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">MedSpa</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic A</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic B</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic C</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic D</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic E</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-auto h-10 w-24 bg-white/10 rounded flex items-center justify-center px-3">
                    <span className="text-white">Clinic F</span>
                  </div>
                </div>
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-eagle-dark to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-eagle-dark to-transparent"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={0.3}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={0.3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
