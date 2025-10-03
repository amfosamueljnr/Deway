import { Zap, Globe, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "Lightning-fast delivery with real-time tracking and guaranteed on-time service.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Comprehensive worldwide coverage with partnerships across continents.",
  },
  {
    icon: DollarSign,
    title: "Affordable Shipping",
    description: "Competitive rates without compromising on quality or service excellence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in logistics with our premium services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-primary">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
