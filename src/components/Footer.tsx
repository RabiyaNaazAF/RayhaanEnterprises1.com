import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-accent/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">RAYHAAN ENTERPRISES</h3>
            <p className="text-sm text-muted-foreground">
              "Your home deserves a design that tells your story.
We bring together creativity, craftsmanship, and innovation to transform ordinary rooms
into extraordinary experiences — shaped around your vision, style, and comfort."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sofa & Recliners</li>
              <li>SS & MS Fabrication</li>
              <li>CCTV Solutions</li>
              <li>Doors & Windows</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">9/10 Thanisandra Main Road, Opp to Auto Gas, Bangalore-560077
</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">+91 8618549138</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">info@rayhaanenterprises17.com</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1JSta9JJN4/?mibextid=wwXIfr" className="text-accent hover:text-accent/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rayhaan_enterprises_/" className="text-accent hover:text-accent/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mr-khan-furniture/" className="text-accent hover:text-accent/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      
        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <pre>&copy; {new Date().getFullYear()} RAYHAAN ENTERPRISES. All rights reserved.                                                                                              Developed by Rabiya Naaz A.F</pre>
        </div>
      </div>
    </footer>
  );
};
