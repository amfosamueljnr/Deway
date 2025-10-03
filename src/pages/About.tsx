import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Heart, Shield, Lightbulb } from "lucide-react";
import manager1 from "@/assets/Samuel-Kwabena-Ofosu-Deway-Express.webp";
import manager2 from "@/assets/Darlington-Koranteng-Antwi-Deway-Express.webp";
import teamPhoto from "@/assets/deway-express-team-1-1024x683.webp";

const coreValues = [
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in every delivery" },
  { icon: Users, title: "Customer Focus", description: "Your satisfaction is our top priority" },
  { icon: TrendingUp, title: "Innovation", description: "Embracing technology for better service" },
  { icon: Heart, title: "Integrity", description: "Honesty and transparency in all we do" },
  { icon: Shield, title: "Reliability", description: "Consistent and dependable service" },
  { icon: Lightbulb, title: "Creativity", description: "Finding smart solutions to complex challenges" },
  { icon: Target, title: "Efficiency", description: "Optimized processes for faster delivery" },
  { icon: Eye, title: "Transparency", description: "Clear communication at every step" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Deway Express</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
           End to end solutions to meet your shipping needs.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in">
             Deway Express Services Limited established in Dec 2021 is a trusted and reliable partner in the shipping and logistics 
             industry with a foundation built on reliability and efficiency.
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in">
              We excel in providing smooth supply chain management, to customized logistics strategies, we are dedicated to enhancing your 
              shipping process and ensuring timely delivery worldwide. 
            </p>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="animate-scale-in border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <img
                  src={manager1}
                  alt="CEO"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-premium"
                />
                <h3 className="text-2xl font-bold mb-2">Samuel Kwabena Ofosu</h3>
                <p className="text-primary font-semibold mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground">
                  Leading Deway Express with vision and innovation, driving our mission to connect Ghana with the world.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-none bg-card/50 backdrop-blur-sm" style={{ animationDelay: "150ms" }}>
              <CardContent className="p-6 text-center">
                <img
                  src={manager2}
                  alt="COO"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-premium"
                />
                <h3 className="text-2xl font-bold mb-2">Darlington Koranteng Antwi</h3>
                <p className="text-primary font-semibold mb-3">Chief Operations Officer</p>
                <p className="text-muted-foreground">
                  Ensuring operational excellence and efficiency across all our logistics operations worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-3xl blur-3xl"></div>
              <img
                src={teamPhoto}
                alt="Deway Express Team"
                className="relative rounded-3xl shadow-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-in-left">
              <Target className="h-12 w-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-primary-foreground/90">
                To provide fast, reliable, and affordable shipping solutions that connect businesses and 
                individuals across the globe, with a special focus on serving the Ghanaian market with excellence.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <Eye className="h-12 w-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-primary-foreground/90">
                To become the most trusted and preferred logistics partner in West Africa, recognized for our 
                innovation, reliability, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
