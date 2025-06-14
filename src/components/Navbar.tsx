
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Solution", href: "#solution" },
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center text-white" onClick={handleLinkClick}>
              <img src={eagleEyeLogo} alt="Agency Eagle Eye Logo" className="h-8 sm:h-10 w-auto" />
              <span className="ml-2 text-base sm:text-lg font-bold whitespace-nowrap">Agency Eagle Eye</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-eagle-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://calendly.com/agencyeagleeye/profit-blueprint" target="_blank" rel="noopener noreferrer">
              <EagleButton size="sm" className="text-xs lg:text-sm px-3 py-2 whitespace-nowrap">Schedule Demo</EagleButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
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
      <div className={`lg:hidden bg-black/95 backdrop-blur-lg transition-all duration-300 border-t border-white/10 ${mobileMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 px-4 text-base text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 mt-4">
            <a href="https://calendly.com/agencyeagleeye/profit-blueprint" target="_blank" rel="noopener noreferrer" className="w-full block">
              <EagleButton size="sm" className="w-full text-center">Schedule Demo</EagleButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
