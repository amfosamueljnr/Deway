import worldwideImage from "@/assets/worldwide-shipping.jpg";

const WorldwideSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-3xl blur-2xl"></div>
              <img
                src={worldwideImage}
                alt="Global logistics network"
                className="relative rounded-3xl shadow-premium w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Global Trade
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Whether by air, sea, or land, Deway Express ensures your shipments arrive safely and on time. 
              From small packages to large freight, we've got you covered.
            </p>
            <p className="text-lg text-muted-foreground">
              Our comprehensive logistics network spans across continents, providing seamless 
              international shipping solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwideSection;
