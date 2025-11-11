import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Award, Shield } from "lucide-react";
import sofa1 from "@/assets/sofa/a.jpg";
import sofa2 from "@/assets/sofa/b.jpg";
import sofa3 from "@/assets/sofa/c.jpg";
import sofa4 from "@/assets/sofa/d.jpg";
import sofa5 from "@/assets/sofa/e.jpg";
import sofa6 from "@/assets/sofa/f.jpg";
import sofaa1 from "@/assets/services/sofa-1.jpg";
import sofaa2 from "@/assets/services/sofa-2.jpg";
import sofaa3 from "@/assets/services/sofa-3.jpg";
import sofaa4 from "@/assets/services/sofa--4.jpg";
import sofaa5 from "@/assets/services/sofa-5.jpg";
import sofaa6 from "@/assets/services/sofa-6.jpg";
import sofaaa from "@/assets/sofa/g.jpg";
import { useState, useEffect } from "react";


const sofaCollection = [
  {
    id: 1,
    name: "Luxury Leather Recliner",
    description: "Premium leather recliner with ergonomic design and smooth reclining mechanism",
    
    features: ["Genuine leather", "360° swivel", "USB charging port", "Memory foam cushions"],
    image: sofaa1,
    category: "Recliners"
  },
  {
    id: 2,
    name: "Modern Fabric Sofa Set",
    description: "Contemporary 3-seater sofa with modular design and premium fabric upholstery",
    
    features: ["Premium fabric", "Modular design", "Storage compartments", "Washable covers"],
    image: sofaa2,
    category: "Sofa Sets"
  },
  {
    id: 3,
    name: "Classic Chesterfield Sofa",
    description: "Timeless Chesterfield design with deep button tufting and solid wood frame",
   
    features: ["Solid wood frame", "Button tufting", "Antique finish", "Lifetime warranty"],
    image: sofaa3,
    category: "Classic"
  },
  {
    id: 4,
    name: "Sectional Corner Sofa",
    description: "Spacious L-shaped sectional sofa perfect for modern living rooms",
   
    features: ["L-shaped design", "Left or right arm facing", "Chaise lounge", "Storage ottoman"],
    image: sofaa4,
    category: "Sectional"
  },
  {
    id: 5,
    name: "Minimalist Loveseat",
    description: "Clean lines and minimalist design with premium comfort",
   
    features: ["Minimalist design", "High-density foam", "Stain-resistant fabric", "Easy assembly"],
    image: sofaa5,
    category: "Loveseats"
  },
  {
    id: 6,
    name: "Executive Office Sofa",
    description: "Professional grade sofa for office spaces with superior comfort",
   
    features: ["Commercial grade", "Fire-resistant fabric", "Adjustable headrest", "Steel frame"],
    image: sofaa6,
    category: "Office"
  }
];

const features = [
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Premium Quality",
    description: "Handcrafted with the finest materials and attention to detail"
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Lifetime Warranty",
    description: "Comprehensive warranty on frames and mechanisms"
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: "Custom Designs",
    description: "Tailored to your space, style, and comfort preferences"
  }
];

export default function SofaCollection() {
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
          style={{ backgroundImage: `url(${sofaaa})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className={`container mx-auto px-4 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Special <span className="text-accent">Sofa Collection</span>
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-md mb-8">
              Discover our premium collection of sofas and recliners, crafted for ultimate comfort and style
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur-sm border-accent/50 text-accent hover:bg-accent/10" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sofa Collection Grid */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each piece is meticulously crafted to combine comfort, durability, and aesthetic appeal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sofaCollection.map((sofa) => (
              <Card key={sofa.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-accent/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={sofa.image}
                    alt={sofa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {sofa.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{sofa.name}</h3>
                  <p className="text-muted-foreground mb-4">{sofa.description}</p>

                  <div className="space-y-2 mb-4">
                    {sofa.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      Inquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sofa Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sofa Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our exquisite collection of premium sofas in stunning detail
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[sofa1, sofa2, sofa3, sofa4, sofa5, sofa6].map((image, index) => (
              <Card key={index} className="break-inside-avoid overflow-hidden group hover:shadow-2xl transition-all duration-500 border-accent/20">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Sofa ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>

          {/* Alternative Grid Layout */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Collection Showcase</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[sofa1, sofa2, sofa3, sofa4, sofa5, sofa6].map((image, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`Sofa ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Full-width Hero Image */}
          <div className="mt-20">
            <Card className="overflow-hidden">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={sofaaa}
                  alt="Featured Sofa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">Premium Collection</h3>
                    <p className="text-xl md:text-2xl">Crafted for Excellence</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Manufacturing Process</h2>
              <p className="text-xl text-muted-foreground">
                From design to delivery, every step is handled with precision and care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Craftsmanship That Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Design Consultation</h4>
                      <p className="text-muted-foreground">We work with you to understand your vision and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Premium Material Selection</h4>
                      <p className="text-muted-foreground">Only the finest materials go into our furniture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expert Craftsmanship</h4>
                      <p className="text-muted-foreground">Skilled artisans bring your vision to life</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Quality Assurance</h4>
                      <p className="text-muted-foreground">Rigorous testing ensures perfection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="aspect-square">
                    <img src={sofa1} alt="Craftsmanship" className="w-full h-full object-cover" />
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-square">
                    <img src={sofa2} alt="Materials" className="w-full h-full object-cover" />
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-square">
                    <img src={sofa3} alt="Quality" className="w-full h-full object-cover" />
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-square">
                    <img src={sofa4} alt="Finished Product" className="w-full h-full object-cover" />
                  </div>
                </Card>
              </div>
            </div>
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Contact us today for a personalized consultation and discover the perfect sofa for your home
          </p>
          <Button variant="default" size="lg" className="text-lg bg-background text-accent hover:bg-background/90 shadow-[var(--shadow-elegant)]" asChild>
            <Link to="/contact">
              Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
