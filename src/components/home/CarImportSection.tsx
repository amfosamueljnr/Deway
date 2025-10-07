import { CheckCircle, Shield, Truck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const benefits = [
  {
    icon: Search,
    title: "Auction Access",
    description: "Access to major US car auctions and dealers",
  },
  {
    icon: Truck,
    title: "Shipping Assistance",
    description: "End-to-end international shipping coordination",
  },
  {
    icon: Shield,
    title: "Vehicle Inspection",
    description: "Pre-purchase inspection and verification",
  },
  {
    icon: CheckCircle,
    title: "Customs Support",
    description: "Complete customs clearance handling",
  },
];

// Placeholder images - can be easily replaced
const carFlyers = [
  "/src/assets/Buy-car1.jpg",
  "/src/assets/Buy-car2.jpg",
  "/src/assets/Buy-car3.jpg",
];

const CarImportSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Buy Cars from Abroad with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Deway
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking to import a car from abroad? Deway Express makes international 
              car buying simple. We connect you with trusted dealers and auctions in 
              the USA and beyond, handle all logistics, and ensure your vehicle arrives 
              safely at your doorstep.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Carousel */}
          <div className="animate-fade-in-left">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {carFlyers.map((flyer, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-premium overflow-hidden group">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-xl blur-2xl"></div>
                        <img
                          src={flyer}
                          alt={`Car import promotion ${index + 1}`}
                          className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Right Column - Text Content */}
          <div className="animate-fade-in-right space-y-8">
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              Looking to import a car from abroad? Deway Express makes international 
              car buying simple. We connect you with trusted dealers and auctions in 
              the USA and beyond, handle all logistics, and ensure your vehicle arrives 
              safely at your doorstep.
            </p> */}

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button asChild>
              <a
                href="https://wa.me/233558230525" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy a Car Now
              </a>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarImportSection;
