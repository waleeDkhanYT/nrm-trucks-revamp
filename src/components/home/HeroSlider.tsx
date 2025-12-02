import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroTruck1 from "@/assets/hero-truck-1.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroTruck3 from "@/assets/hero-truck-3.jpg";

const slides = [
  {
    image: heroTruck1,
    title: "Large Fleet of Tippers & Trailer Trucks",
    description: "Delivering excellence in construction and logistics with our modern fleet of heavy vehicles.",
  },
  {
    image: heroTruck2,
    title: "Reliable Transport Solutions",
    description: "24/7 service availability with on-time delivery guaranteed across the region.",
  },
  {
    image: heroTruck3,
    title: "Heavy Equipment Excellence",
    description: "State-of-the-art machinery for all your construction and industrial needs.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/60 to-transparent" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-medium rounded-full text-sm mb-6"
                >
                  Welcome to NRM Trucks
                </motion.span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-accent-foreground/80 mb-8">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services">
                    <Button variant="hero" size="xl">
                      Our Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="xl" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-accent-foreground/40 hover:bg-accent-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSlider;
