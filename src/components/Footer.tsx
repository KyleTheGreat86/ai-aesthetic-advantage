
import { Facebook, Linkedin, ArrowUp } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-eagle-dark/90 border-t border-white/10 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Agency Eagle Eye</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The AI Advantage for US Audiology Clinics. Automated reviews, lead recovery, and consultation conversion boost for premium audiology clinics.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#case-studies">Case Studies</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="https://calendly.com/weareagencyeagleeye/30min" target="_blank">Book a Call</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Agency Eagle Eye. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full inline-flex transition-colors"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const FooterLink = ({ href, children, target }: FooterLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
