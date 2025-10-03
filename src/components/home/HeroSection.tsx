import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  const handleTrackOrder = () => {
    window.open("https://www.dhl.com/gh-en/home/tracking.html", "_blank");
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay Gradient (transparent top to primary bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#2E3279]/90"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-3xl lg:text-left text-center">
          {/* Headline with Fade-in */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 animate-fade-in">
            Fast, Reliable & Affordable{" "}             Global Shipping
            
          </h1>

          {/* Subtext with Fade-in (delayed) */}
          <p 
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            Fast, reliable, and affordable shipping solutions for individuals and businesses worldwide.
          </p>

          {/* CTAs with Slide-up Animation */}
          <div 
            className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Button asChild>
              <a
                href="https://wa.me/233558230525" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Quote
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleTrackOrder}
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
            >
              Track Shipment
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
