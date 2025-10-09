import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/dEWAYXPRESSWHITE.png"; // adjust path depending on your setup

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Deway Express Logo" className="h-10 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Fast, reliable, and affordable shipping solutions for individuals and businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Freight Forwarding</li>
              <li>Pickup Service</li>
              <li>Warehousing</li>
              <li>Buying and Selling of Cars</li>
              <li>Customs Clearance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  12 Red Okai Street New Achimota, Accra -Ghana
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+233123456789" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +233 302446104
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+233123456789" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +233 540605432
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@dewayexpress.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@dewayexpress.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Deway Express. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/dewayxpress?igsh=MWh1OWRldTQzMDY5ZA==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5" />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
