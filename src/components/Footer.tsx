
import { Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-eagle-dark/90 border-t border-white/10 pt-12 pb-6 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <div className="mb-16 max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-eagle-blue/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Brokerage?</h2>
          <p className="text-lg mb-6">Book a 30-minute strategy session to see Eagle Eye in action. Limited spots available.</p>
          
          <a 
            href="https://calendly.com/weareagencyeagleeye/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <EagleButton className="uppercase font-bold group">
              Claim Your Free Demo
              <span className="ml-2 group-hover:ml-3 transition-all">→</span>
            </EagleButton>
          </a>
          
          <p className="mt-4 text-sm text-red-400 font-medium">Only 3 implementations available this month!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={eagleEyeLogo} alt="Eagle Eye Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold">Eagle Eye AI</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI infrastructure for CRE brokers handling $3M-$20M deals. We help you close more off-market deals with less admin work through intelligent automation and mobile-first design.
            </p>
            <div className="card bg-transparent flex space-x-4 p-0">
              <SocialIcon 
                href="https://www.facebook.com/profile.php?id=61575035972691" 
                containerClass="containerOne"
                ariaLabel="Facebook"
              >
                <svg className="socialSvg" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/kyle-holland-agencyeagleeye/" 
                containerClass="containerThree"
                ariaLabel="LinkedIn"
              >
                <svg className="socialSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon 
                href="#" 
                containerClass="containerTwo"
                ariaLabel="YouTube"
              >
                <svg className="socialSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#problem">The Problem</FooterLink>
              <FooterLink href="#solution">Our Solution</FooterLink>
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Eagle Eye AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink href="#privacy">Privacy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
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
  href: string;
  containerClass: string;
  children: React.ReactNode;
  ariaLabel: string;
}

const SocialIcon = ({ href, containerClass, children, ariaLabel }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`socialContainer ${containerClass} w-[52px] h-[52px] bg-[#2c2c2c] flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-100 active:scale-90`}
      aria-label={ariaLabel}
    >
      {children}
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
