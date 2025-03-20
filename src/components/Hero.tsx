
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate scroll progress as a percentage (0-100)
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-white via-solstice-gray/50 to-solstice-gray/80">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-solstice-blue/10 px-4 py-2 rounded-full mb-6 animate-bounce">
              <Sparkles className="h-4 w-4 text-solstice-lightblue" />
              <span className="text-sm font-medium text-solstice-blue">Powering the Future with Clean Energy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-solstice-blue leading-tight mb-6">
              Bridging Renewable Energy <br className="hidden md:block" />
              <span className="text-solstice-lightblue relative">
                to Power the Future
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M317.219 5.17202C290.77 5.17202 276.641 7.31285 251.491 7.31285C226.34 7.31285 215.116 1.93935 190.265 1.93935C165.414 1.93935 158.59 5.17202 129.973 5.17202C101.357 5.17202 93.1871 1 64.3716 1C35.556 1 18.1181 10.7223 1 10.7223" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Unlocking renewable projects stuck in interconnection queues to power AI data centers and critical workloads through innovative software, load, and energy storage solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-solstice-blue hover:bg-solstice-lightblue text-white px-8 py-6 text-lg group transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' })}
                className="border-solstice-blue text-solstice-blue hover:bg-solstice-blue hover:text-white px-8 py-6 text-lg group transition-all duration-300"
              >
                Learn More
                <Zap className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Interactive Grid Visualization */}
          <div ref={gridRef} className="flex justify-center lg:justify-end relative animate-fade-in">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              {/* Grid Container */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1">
                {Array.from({ length: 64 }).map((_, index) => {
                  // Calculate position in the grid (row, column)
                  const row = Math.floor(index / 8);
                  const col = index % 8;
                  
                  // Calculate activation threshold for this cell based on position
                  // Cells will light up in a wave pattern as user scrolls
                  const activationThreshold = (row + col) / 16;
                  
                  // Determine if this cell should be active based on scroll progress
                  const isActive = scrollProgress >= activationThreshold;
                  
                  // Determine brightness based on energy flow
                  const brightness = isActive 
                    ? Math.min(1, (scrollProgress - activationThreshold) * 5) 
                    : 0;
                  
                  // Dynamic color based on position and activation
                  const hue = (row + col) * 5 + 200; // Blue-green spectrum
                  
                  return (
                    <div 
                      key={index}
                      className={`relative rounded transition-all duration-500 ease-in-out ${isActive ? 'scale-100' : 'scale-95'}`}
                      style={{
                        backgroundColor: isActive 
                          ? `hsla(${hue}, 70%, ${50 + brightness * 30}%, ${0.3 + brightness * 0.7})`
                          : 'rgba(200, 200, 220, 0.1)',
                        boxShadow: isActive 
                          ? `0 0 ${10 + brightness * 20}px hsla(${hue}, 70%, 50%, ${brightness * 0.8})`
                          : 'none',
                        transform: `scale(${isActive ? 1 : 0.9})`,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {/* Energy pulse animation */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded animate-pulse"
                          style={{ 
                            backgroundColor: `hsla(${hue}, 70%, 60%, ${brightness * 0.5})`,
                            animationDuration: `${3 + Math.random() * 2}s`
                          }}
                        />
                      )}
                      
                      {/* Connection lines */}
                      {col < 7 && isActive && (
                        <div 
                          className="absolute top-1/2 right-0 h-[2px] transform translate-x-[0.5px] -translate-y-1/2"
                          style={{ 
                            backgroundColor: `hsla(${hue}, 70%, 60%, ${brightness * 0.8})`,
                            width: '100%',
                            boxShadow: `0 0 5px hsla(${hue}, 70%, 60%, ${brightness})`,
                            opacity: scrollProgress > (activationThreshold + 0.05) ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        />
                      )}
                      
                      {row < 7 && isActive && (
                        <div 
                          className="absolute left-1/2 bottom-0 w-[2px] transform -translate-x-1/2 translate-y-[0.5px]"
                          style={{ 
                            backgroundColor: `hsla(${hue}, 70%, 60%, ${brightness * 0.8})`,
                            height: '100%',
                            boxShadow: `0 0 5px hsla(${hue}, 70%, 60%, ${brightness})`,
                            opacity: scrollProgress > (activationThreshold + 0.05) ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Energy Hotspots */}
              {[...Array(5)].map((_, i) => {
                const size = 20 + Math.random() * 30;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const delay = i * 0.2;
                const isActive = scrollProgress > 0.3 + delay;
                
                return (
                  <div 
                    key={`hotspot-${i}`} 
                    className={`absolute rounded-full transition-all duration-700 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${top}%`,
                      left: `${left}%`,
                      backgroundColor: `rgba(62, 124, 177, ${isActive ? 0.7 : 0})`,
                      boxShadow: isActive ? '0 0 20px rgba(62, 124, 177, 0.8)' : 'none',
                      zIndex: 10,
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                );
              })}
              
              {/* Grid Stats - Appear as user scrolls */}
              <div 
                className="absolute top-2 right-2 bg-black/10 backdrop-blur-sm rounded-lg p-3 transition-all duration-500"
                style={{
                  opacity: scrollProgress > 0.4 ? 1 : 0,
                  transform: `translateY(${scrollProgress > 0.4 ? 0 : 20}px)`
                }}
              >
                <div className="text-xs font-mono text-solstice-blue">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-solstice-lightblue animate-pulse"></div>
                    <span>Grid Capacity: {Math.round(scrollProgress * 100)}%</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-solstice-green animate-pulse"></div>
                    <span>Energy Flow: {Math.round(scrollProgress * 250)} MW</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-solstice-lightgreen animate-pulse"></div>
                    <span>Nodes: {Math.round(16 + scrollProgress * 48)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
