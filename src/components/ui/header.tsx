
"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Phone } from "lucide-react";
import { useState } from "react";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "#home",
            description: "Meet Oor Laura",
        },
        {
            title: "How Laura Works",
            href: "#how-laura-works",
            description: "See the magic in 3 simple steps",
        },
        {
            title: "Testimonials", 
            href: "#testimonials",
            description: "What Scottish agents are saying",
        },
        {
            title: "Pricing",
            href: "#pricing",
            description: "Transparent Scottish pricing",
        },
        {
            title: "Oor Story",
            href: "#about",
            description: "Born in Glasgow, built for Scotland",
        },
        {
            title: "FAQ",
            href: "#faq",
            description: "Your questions answered",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    
    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setOpen(false);
    };

    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-black/95 backdrop-blur-md border-b border-amber-400/20">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.slice(0, 4).map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink>
                                        <Button 
                                            variant="ghost" 
                                            className="text-white hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                                            onClick={() => handleNavClick(item.href)}
                                        >
                                            {item.title}
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                <div className="flex lg:justify-center">
                    <div className="flex items-center justify-center">
                        <img 
                            src="/lovable-uploads/31a5098f-1f41-453e-aec3-42264b2b0322.png" 
                            alt="Agency Eagle Eye" 
                            className="h-12 w-auto"
                        />
                    </div>
                </div>
                
                <div className="flex justify-end w-full gap-3">
                    <Button 
                        variant="ghost" 
                        className="hidden md:inline text-white hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                        onClick={() => handleNavClick('#about')}
                    >
                        Oor Story
                    </Button>
                    <Button 
                        variant="ghost" 
                        className="hidden md:inline text-white hover:text-amber-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                        onClick={() => handleNavClick('#faq')}
                    >
                        FAQ
                    </Button>
                    <div className="border-r hidden md:inline border-slate-600/50 mx-2"></div>
                    
                    {/* Call Laura button */}
                    <Button 
                        className="bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-amber-400 font-bold shadow-lg hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open('tel:07883299579', '_self')}
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Laura
                    </Button>
                    
                    <Button 
                        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-bold shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        onClick={() => window.open('https://calendly.com/weareagencyeagleeye/30min', '_blank')}
                    >
                        Get Started
                    </Button>
                </div>
                
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-white hover:text-amber-400 transition-colors">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-slate-700/50 flex flex-col w-full right-0 bg-black/95 backdrop-blur-md shadow-xl py-6 container gap-6 scottish-flag-unfold">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => handleNavClick(item.href)}
                                            className="flex justify-between items-center text-left group"
                                        >
                                            <span className="text-lg text-white hover:text-amber-400 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-300">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
                                        </button>
                                        <p className="text-sm text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
