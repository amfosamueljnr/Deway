import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorldwideSection from "@/components/home/WorldwideSection";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import CommitmentSection from "@/components/home/CommitmentSection";
import PartnersCarousel from "@/components/home/PartnersCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <WorldwideSection />
      <ReviewsCarousel />
      <CommitmentSection />
      <PartnersCarousel />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
