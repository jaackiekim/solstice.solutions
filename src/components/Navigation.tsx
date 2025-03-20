
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-solstice-gray/90 dark:bg-solstice-dark/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/bab99bd1-d1bf-422a-970c-3fc953a13b51.png" 
            alt="Solstice Logo" 
            className="h-10 w-auto"
          />
          <span className={`ml-2 text-xl font-display font-semibold ${scrolled ? "text-solstice-blue dark:text-white" : "text-solstice-blue dark:text-white"}`}>
            Solstice
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection("about")} 
            className={`text-sm font-medium cursor-pointer hover:text-solstice-lightblue transition-colors ${
              scrolled ? "text-solstice-dark dark:text-white" : "text-solstice-dark dark:text-white"
            }`}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection("solutions")} 
            className={`text-sm font-medium cursor-pointer hover:text-solstice-lightblue transition-colors ${
              scrolled ? "text-solstice-dark dark:text-white" : "text-solstice-dark dark:text-white"
            }`}
          >
            Solutions
          </a>
          <a 
            onClick={() => scrollToSection("team")} 
            className={`text-sm font-medium cursor-pointer hover:text-solstice-lightblue transition-colors ${
              scrolled ? "text-solstice-dark dark:text-white" : "text-solstice-dark dark:text-white"
            }`}
          >
            Team
          </a>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-solstice-blue hover:bg-solstice-lightblue text-white"
          >
            Contact Us
          </Button>
          <DarkModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button 
            className="p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-solstice-dark dark:text-white" : "text-solstice-dark dark:text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-solstice-dark dark:text-white" : "text-solstice-dark dark:text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-solstice-gray/95 dark:bg-solstice-dark/95 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              onClick={() => scrollToSection("about")} 
              className="text-solstice-dark dark:text-white py-2 px-4 font-medium cursor-pointer hover:bg-solstice-blue/10 dark:hover:bg-white/10 rounded-md"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection("solutions")} 
              className="text-solstice-dark dark:text-white py-2 px-4 font-medium cursor-pointer hover:bg-solstice-blue/10 dark:hover:bg-white/10 rounded-md"
            >
              Solutions
            </a>
            <a 
              onClick={() => scrollToSection("team")} 
              className="text-solstice-dark dark:text-white py-2 px-4 font-medium cursor-pointer hover:bg-solstice-blue/10 dark:hover:bg-white/10 rounded-md"
            >
              Team
            </a>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-solstice-blue hover:bg-solstice-lightblue text-white w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
