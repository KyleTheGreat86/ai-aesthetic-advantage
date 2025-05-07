
import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-eagle-dark/80 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src={eagleLogo}
                alt="Agency Eagle Eye"
              />
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-6">
                <a
                  href="#home"
                  className="text-white hover:text-eagle-blue transition-colors"
                >
                  Home
                </a>
                <a
                  href="#results"
                  className="text-white hover:text-eagle-blue transition-colors"
                >
                  Results
                </a>
                <a
                  href="#pricing"
                  className="text-white hover:text-eagle-blue transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-eagle-blue transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-eagle-blue transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-white hover:text-eagle-blue transition-colors font-medium"
            >
              Log In
            </a>
            <a
              href="https://youtu.be/hLvm2JHzOF4"
              target="_blank"
              rel="noopener noreferrer"
              className="eagle-btn-primary inline-flex items-center gap-2 relative group overflow-hidden"
            >
              <span>START FREE</span>
              <Eye size={16} className="text-white" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="absolute -inset-1 bg-eagle-blue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-eagle-blue transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-eagle-dark/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#results"
              className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Results
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="border-t border-white/10 my-2 pt-2">
              <a
                href="#login"
                className="block px-3 py-2 text-white hover:bg-eagle-blue/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </a>
              <a
                href="https://youtu.be/hLvm2JHzOF4"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-eagle-blue font-semibold hover:bg-eagle-blue/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                START FREE
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
