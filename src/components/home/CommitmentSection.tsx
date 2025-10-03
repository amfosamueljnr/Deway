import { CheckCircle } from "lucide-react";

const commitments = [
  "Reliability you can count on",
  "Complete transparency in pricing",
  "Efficient delivery systems",
  "24/7 customer support",
];

const CommitmentSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Committed to Excellence
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            At Deway Express, we promise reliability, transparency, and efficiency. 
            Your trust is our priority.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
                <span className="text-lg">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
