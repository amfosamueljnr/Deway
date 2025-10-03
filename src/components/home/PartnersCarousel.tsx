// Import partner logos from your assets folder
import DHLLogo from "@/assets/dhl.png";
import FedExLogo from "@/assets/FedEx.png";
import UPSLogo from "@/assets/ups.png";
import MAERSK from "@/assets/maersk.png";
import ARKAN from "@/assets/Arkan.png";

const partners = [
  { name: "DHL", logo: DHLLogo },
  { name: "FedEx", logo: FedExLogo },
  { name: "UPS", logo: UPSLogo },
  { name: "Maersk", logo: MAERSK },
  { name: "Arkan", logo: ARKAN },
];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Our Trusted Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-8 h-24 flex items-center justify-center bg-card rounded-xl shadow-glass hover:shadow-premium transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
