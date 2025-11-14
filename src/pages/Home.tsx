import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Quote, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import heroImage from "@/assets/hero2.mp4";
import sofa1 from "@/assets/services/sofa-1.jpg";
import fabrication1 from "@/assets/services/fabrication-1.jpg";
import cctv1 from "@/assets/services/cctv-1.jpg";
import doors1 from "@/assets/services/doors-1.jpg";
import interior1 from "@/assets/services/interior-1.jpg";
import interior2 from "@/assets/services/interior-2.jpg";
import upvc1 from "@/assets/services/upvc-1.jpg";
import before1 from "@/assets/before-after/before-2.webp";
import after1 from "@/assets/before-after/after-2.webp";
import before2 from "@/assets/before-after/before--3.webp";
import after2 from "@/assets/before-after/after-3.webp";

const services = [
  {
    title: "Sofa & Recliners",
    description: "Luxury furniture that combines comfort with elegant design",
    image: sofa1,
    icon: "🛋️",
  },
  {
    title: "SS & MS Fabrication",
    description: "Premium metalwork for modern architectural needs",
    image: fabrication1,
    icon: "🔧",
  },
  {
    title: "CCTV Security",
    description: "Advanced security solutions for your peace of mind",
    image: cctv1,
    icon: "📹",
  },
  {
    title: "Aluminum & PVC Doors",
    description: "Contemporary doors and windows for elegant spaces",
    image: doors1,
    icon: "🚪",
  },
  {
    title: "Complete Interior",
    description: "End-to-end interior design solutions",
    image: interior1,
    icon: "🏠",
  },
  {
    title: "UPVC Windows",
    description: "Energy-efficient windows for modern homes",
    image: upvc1,
    icon: "🪟",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content: "The attention to detail and craftsmanship exceeded our expectations. Our living room transformation is absolutely stunning!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Professional service from start to finish. The team understood our vision perfectly and delivered beyond what we imagined.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Interior Designer",
    content: "Working with Rayhaan Enterprises has been a pleasure. Their quality and reliability make them our go-to partner.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroImage}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Award-Winning Interior Design</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Transform Your Space<br />
            <span className="text-accent">Into a Masterpiece</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Expert interior design, premium furniture, and complete home solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg shadow-[var(--shadow-gold)]" asChild>
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-background/20 backdrop-blur-sm border-accent/50 text-accent hover:bg-accent/10">
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-accent">RAYHAAN ENTERPRISES</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over a decade of excellence in interior design and furniture manufacturing, we bring your vision to life. 
              Our team of expert craftsmen and designers work tirelessly to create spaces that inspire and furniture that endures.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: "70+", label: "Projects Completed" },
                { number: "15+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Expert Team" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-6 md:px-16 bg-[#0f0f0f] text-white">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ✅ LEFT SIDE CONTENT – DARK THEME */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforming Spaces Into Modern Luxury
            </h2>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              At Rayhaan Design Studio, we believe that every space holds the potential
              to tell a story. Our design philosophy blends contemporary aesthetics with
              functional elegance, creating interiors that are refined, timeless, and deeply personal.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              From concept to execution, our team ensures that each detail — lighting, textures,
              materials, spatial balance — works together in harmony. We don&apos;t just renovate rooms;
              we craft immersive environments that elevate your lifestyle.
            </p>

            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-300" asChild>
              <Link to="/services">Explore Our Creations</Link>
            </Button>
          </div>

          {/* ✅ RIGHT SIDE: BEFORE/AFTER SLIDER */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage={before1}
              afterImage={after1}
              beforeAlt="Before Renovation"
              afterAlt="After Renovation"
            />

            <p className="text-center mt-5 text-gray-400">
              Move the slider left or right to compare the transformation
            </p>
          </div>

        </div>
        <br></br>
        <br></br>
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ✅ LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Elegant Makeovers Crafted With Precision
            </h2>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Whether it&apos;s a compact urban apartment or a spacious luxury home, our team
              focuses on redefining every inch of your space. We pay close attention to
              symmetry, lighting, textures, and spatial flow to ensure your interiors feel
              sophisticated and harmonious.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              This transformation showcases how thoughtful planning and modern design can
              elevate ambiance without compromising comfort. Every element is carefully
              chosen to enhance the feel of your living experience.
            </p>

            
          </div>

          {/* ✅ RIGHT SIDE: SLIDER */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage={before2}
              afterImage={after2}
              beforeAlt="Before Renovation 2"
              afterAlt="After Renovation 2"
            />

            <p className="text-center mt-5 text-gray-400">
              Move the slider to explore the remarkable redesign
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior solutions tailored to your unique style and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-white" asChild>
                    <Link to="/services"  >
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {[
                  "Premium quality materials and craftsmanship",
                  "Customized solutions for every budget",
                  "Experienced and certified professionals",
                  "On-time project delivery guarantee",
                  "Comprehensive after-sales support",
                  "Sustainable and eco-friendly practices",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={interior2}
                alt="Quality Interiors"
                className="rounded-lg shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-accent/20 hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <p className="text-foreground mb-4">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-accent">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-accent/90 max-w-2xl mx-auto">
            Get a free consultation with our design experts and bring your dream home to life
          </p>
          <Button variant="hero" size="lg" className="text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-elegant)]" asChild>
            <Link to="/contact">
              Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
