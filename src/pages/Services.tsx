import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/services/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Plane, Warehouse, FileCheck, Package, MapPin } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Pickup Service",
    description: "Convenient door-to-door pickup from your location. Schedule a pickup and we'll collect your packages.",
  },
  {
    icon: Plane,
    title: "Freight Forwarding",
    description: "Comprehensive air, sea, and land freight solutions for businesses of all sizes.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities with inventory management and distribution services.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of all customs documentation and clearance procedures.",
  },
  {
    icon: Truck,
    title: "Shipping Transportation",
    description: "Multi-modal transportation services by air, sea, and land to ensure timely delivery.",
  },
  {
    icon: MapPin,
    title: "Delivery",
    description: "Last-mile delivery services with real-time tracking and proof of delivery.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Logistics Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive shipping and logistics services tailored to meet your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Ship?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get started with our reliable logistics services today. Contact us for a personalized quote.
            </p>
            <a
              href="https://wa.me/233558230525"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-primary rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-hover"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
