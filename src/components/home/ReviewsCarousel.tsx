import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Sarah A.",
    review: "Deway Express made my shipment from the UK seamless and stress-free.",
    rating: 5,
  },
  {
    name: "Kofi B.",
    review: "Fast, professional, and affordable. I'll keep using them.",
    rating: 5,
  },
  {
    name: "Nana E.",
    review: "Their customer support is excellent. Highly recommend.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    review: "Reliable service every single time. Worth every penny!",
    rating: 5,
  },
  {
    name: "Kwame D.",
    review: "Best logistics company in Ghana. Always on time.",
    rating: 5,
  },
  {
    name: "Ama K.",
    review: "Professional team and great tracking system.",
    rating: 5,
  },
];

const ReviewsCarousel = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-xl text-muted-foreground">
          Trusted by thousands of satisfied customers
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of reviews */}
          {reviews.map((review, index) => (
            <Card
              key={`first-${index}`}
              className="flex-shrink-0 w-80 mx-4 border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-semibold text-primary">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review, index) => (
            <Card
              key={`second-${index}`}
              className="flex-shrink-0 w-80 mx-4 border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-semibold text-primary">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
