import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import sofa1 from "@/assets/services/sofa-1.jpg";
import sofa2 from "@/assets/services/sofa-2.jpg";
import sofa3 from "@/assets/services/sofa-3.jpg";
import sofa4 from "@/assets/services/sofa--4.jpg";

import fabrication1 from "@/assets/services/fabrication-1.jpg";
import fabrication2 from "@/assets/services/fabrication-2.jpg";
import fabrication3 from "@/assets/services/fabrication-3.webp";
import fabrication4 from "@/assets/services/fabrication-4.webp";
import cctv1 from "@/assets/services/cctv-1.jpg";
import cctv2 from "@/assets/services/cctv-2.jpg";
import cctv3 from "@/assets/services/cctv-3.jpg";
import cctv4 from "@/assets/services/cctv-4.jpg";
import doors1 from "@/assets/services/doors-1.jpg";
import doors2 from "@/assets/services/doors-2.jpg";
import doors3 from "@/assets/services/doors-3.jpg";
import doors4 from "@/assets/services/doors-4.jpg";
import interior1 from "@/assets/services/interior-1.jpg";
import interior2 from "@/assets/services/interior-2.jpg";
import interior3 from "@/assets/services/interior-3.jpg";
import interior4 from "@/assets/services/interior-4.jpg";
import upvc1 from "@/assets/services/upvc-1.jpg";
import upvc2 from "@/assets/services/upvc-2.jpg";
import upvc3 from "@/assets/services/upvc-3.webp";
import upvc4 from "@/assets/services/upvc-4.webp";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Sofa & Recliners Manufacturing",
    description: "Premium quality sofas and recliners designed for maximum comfort and style",
    features: [
      "Custom designs tailored to your space",
      "Premium leather and fabric options",
      "Ergonomic reclining mechanisms",
      "Durable hardwood frames",
      "Wide range of colors and styles",
      "Lifetime warranty on frames",
    ],
    images: [sofa1, sofa2, sofa3, sofa4],
    icon: "🛋️",
  },
  {
    title: "SS and MS Fabrication Work",
    description: "Expert stainless steel and mild steel fabrication for architectural and decorative elements",
    features: [
      "Custom railings and balustrades",
      "Decorative metal panels",
      "Gates and grilles",
      "Structural steel work",
      "Powder coating and finishing",
      "Corrosion-resistant materials",
    ],
    images: [fabrication1, fabrication2, fabrication3, fabrication4],
    icon: "🔧",
  },
  {
    title: "CCTV Security Solutions",
    description: "Comprehensive security camera systems for residential and commercial properties",
    features: [
      "HD and 4K camera options",
      "Remote monitoring capabilities",
      "Night vision technology",
      "Motion detection alerts",
      "Cloud storage solutions",
      "Professional installation",
    ],
    images: [cctv1, cctv2, cctv3, cctv4],
    icon: "📹",
  },
  {
    title: "Aluminum & PVC Doors and Windows",
    description: "Modern, energy-efficient doors and windows with sleek designs",
    features: [
      "Thermal insulation",
      "Noise reduction properties",
      "Low maintenance materials",
      "Customizable designs",
      "Weather-resistant",
      "Multiple color options",
    ],
    images: [doors1, doors2, doors3, doors4],
    icon: "🚪",
  },
  {
    title: "Complete Interior Work",
    description: "Full-service interior design and execution for residential and commercial spaces",
    features: [
      "3D design visualization",
      "Space planning and layout",
      "Custom furniture solutions",
      "Lighting design",
      "Material sourcing",
      "Project management",
    ],
    images: [interior1, interior2, interior3, interior4],
    icon: "🏠",
  },
  {
    title: "UPVC Windows",
    description: "Energy-efficient UPVC windows that combine durability with aesthetic appeal",
    features: [
      "Energy efficient design",
      "Sound insulation",
      "Low maintenance",
      "Multi-point locking systems",
      "UV protection",
      "Various opening styles",
    ],
    images: [upvc1, upvc2, upvc3, upvc4],
    icon: "🪟",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${interior1})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className={`container mx-auto px-4 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-md">
              Comprehensive interior and furniture solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className="scroll-mt-20">
                <div className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Images Grid */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {service.images.slice(0, 4).map((image, imgIndex) => (
                        <Card key={imgIndex} className="overflow-hidden group">
                          <div className="relative aspect-square overflow-hidden">
                            <img
                              src={image}
                              alt={`${service.title} ${imgIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {service.images.slice(4, 6).map((image, imgIndex) => (
                        <Card key={imgIndex} className="overflow-hidden group">
                          <div className="relative aspect-square overflow-hidden">
                            <img
                              src={image}
                              alt={`${service.title} ${imgIndex + 5}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gradient-gold)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <Button variant="default" size="lg" className="text-lg bg-background text-accent hover:bg-background/90 shadow-[var(--shadow-elegant)]" asChild>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
