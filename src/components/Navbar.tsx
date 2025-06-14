
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "The Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Benefits", href: "#benefits" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center text-white">
              <img src={eagleEyeLogo} alt="Eagle Eye Logo" className="h-8 sm:h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-eagle-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
              <EagleButton size="sm" className="text-xs lg:text-sm px-3 py-2">Schedule Demo</EagleButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-4 text-base hover:bg-white/5 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer" className="w-full block">
              <EagleButton size="sm" className="w-full">Schedule Demo</EagleButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
