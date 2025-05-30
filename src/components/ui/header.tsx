
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
import { Menu, MoveRight, X, Heart } from "lucide-react";
import { useState } from "react";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "#home",
            description: "",
        },
        {
            title: "Solution",
            href: "#solution",
            description: "See how our AI transforms aesthetic practices",
        },
        {
            title: "Benefits",
            href: "#benefits", 
            description: "Discover the advantages of 24/7 AI coverage",
        },
        {
            title: "How It Works",
            href: "#how-it-works",
            description: "From setup to live in 48 hours",
        },
        {
            title: "Testimonials",
            href: "#testimonials",
            description: "What practice owners are saying",
        },
        {
            title: "FAQ",
            href: "#faq",
            description: "Get your questions answered",
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
        <header className="w-full z-40 fixed top-0 left-0 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.slice(0, 4).map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink>
                                        <Button 
                                            variant="ghost" 
                                            className="text-white hover:text-eagle-gold hover:bg-gray-800"
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
                    <div className="flex items-center">
                        <Heart className="h-8 w-8 text-eagle-gold mr-2" />
                        <span className="text-xl font-bold text-white">Eagle Eye Response</span>
                    </div>
                </div>
                
                <div className="flex justify-end w-full gap-4">
                    <Button 
                        variant="ghost" 
                        className="hidden md:inline text-white hover:text-eagle-gold hover:bg-gray-800"
                        onClick={() => handleNavClick('#testimonials')}
                    >
                        Testimonials
                    </Button>
                    <Button 
                        variant="ghost" 
                        className="hidden md:inline text-white hover:text-eagle-gold hover:bg-gray-800"
                        onClick={() => handleNavClick('#faq')}
                    >
                        FAQ
                    </Button>
                    <div className="border-r hidden md:inline border-gray-600"></div>
                    <Button 
                        variant="outline" 
                        className="border-eagle-gold text-eagle-gold hover:bg-eagle-gold hover:text-black"
                        onClick={() => window.open('mailto:kyle@agencyeagleeye.com', '_blank')}
                    >
                        Contact
                    </Button>
                    <Button 
                        className="bg-eagle-gold text-black hover:bg-eagle-gold/90"
                        onClick={() => window.open('https://calendly.com/weareagencyeagleeye/30min', '_blank')}
                    >
                        Get Started
                    </Button>
                </div>
                
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-white">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-gray-800 flex flex-col w-full right-0 bg-black/95 backdrop-blur-sm shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => handleNavClick(item.href)}
                                            className="flex justify-between items-center text-left"
                                        >
                                            <span className="text-lg text-white hover:text-eagle-gold">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-gray-400" />
                                        </button>
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
