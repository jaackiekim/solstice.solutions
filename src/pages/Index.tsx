
import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import USMapVisualization from "@/components/USMapVisualization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number>();
  
  // Smooth scroll tracking using requestAnimationFrame
  useEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
      requestRef.current = requestAnimationFrame(updateScroll);
    };
    
    requestRef.current = requestAnimationFrame(updateScroll);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="solstice-theme">
      <div className="min-h-screen relative overflow-hidden bg-white dark:bg-solstice-dark">
        <Navigation />
        <Hero />
        <About />
        <Solutions />
        <USMapVisualization />
        <Team />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
