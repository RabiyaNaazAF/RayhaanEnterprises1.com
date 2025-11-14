import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Shield, Target, Users, Sparkles, Star, ArrowRight, Camera, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import interior1 from "@/assets/services/interior-1.jpg";
import before1 from "@/assets/before-after/before-2.webp";
import after1 from "@/assets/before-after/after-2.webp";
import before2 from "@/assets/before-after/before--3.webp";
import after2 from "@/assets/before-after/after-3.webp";
import heroVideo from "@/assets/hero-image.mp4";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform spaces into beautiful, functional environments that enhance the quality of life for our clients.",
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "We're passionate about design excellence and committed to exceeding expectations with every project.",
    },
    {
      icon: Shield,
      title: "Our Promise",
      description: "Quality craftsmanship, timely delivery, and transparent communication throughout your project journey.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated team of designers, craftsmen, and project managers working in perfect harmony.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Company Founded" },
    { year: "2015", event: "Expanded to Commercial Projects" },
    { year: "2018", event: "Opened State-of-the-Art Workshop" },
    { year: "2020", event: "500+ Projects Milestone" },
    { year: "2025", event: "Excellence Award Winner" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-accent/30">
              <Sparkles className="w-5 h-5 text-accent animate-spin" />
              <span className="text-sm font-medium text-accent">Excellence Since 2009</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">RAYHAAN ENTERPRISES</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Crafting exceptional interiors and furniture that transform spaces into masterpieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg shadow-[var(--shadow-gold)]" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-background/20 backdrop-blur-sm border-accent/50 text-accent hover:bg-accent/10">
               <Link to="/services">View Our Work</Link> 
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-br from-background via-card/50 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/15 rounded-full blur-lg"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A Journey of <span className="text-accent">Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, RAYHAAN ENTERPRISES began with a simple vision: to create beautiful,
                  functional spaces that enhance the lives of our clients. What started as a small furniture
                  workshop has grown into a comprehensive interior design and manufacturing company.
                </p>
                <p>
                  Over the years, we've completed over 70+ projects, from cozy residential spaces to
                  impressive commercial interiors. Our commitment to quality, innovation, and customer
                  satisfaction has made us a trusted name in the industry.
                </p>
                <p>
                  Today, we pride ourselves on our skilled team, state-of-the-art workshop, and the
                  lasting relationships we've built with our clients. Every project is a testament to
                  our dedication to excellence.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">70+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <img
                src={interior1}
                alt="Our Workshop"
                className="relative rounded-2xl shadow-[var(--shadow-elegant)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-6 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 mb-2 animate-pulse" />
                <p className="font-bold text-2xl">15+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-accent/30">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-elegant)] transition-all duration-500 group hover:-translate-y-2 border-accent/20 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gradient-to-br from-background to-card/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-accent/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-accent/6 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-accent/30">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Our Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey of <span className="text-accent">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our path to becoming a leader in interior design
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20"></div>
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                      <Card className="inline-block hover:shadow-[var(--shadow-elegant)] transition-all duration-500 group hover:-translate-y-1 border-accent/20 hover:border-accent/50">
                        <CardContent className="p-6">
                          <p className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">{milestone.year}</p>
                          <p className="text-foreground font-medium">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg animate-pulse"></div>
                  </div>
                ))}
              </div>
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

            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-300" asChild>
              <Link to="/services">See More Transformations</Link>
            </Button>
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
          

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { role: "Designers", count: "15+" },
              { role: "Craftsmen", count: "25+" },
              { role: "Project Managers", count: "8+" },
              { role: "Support Staff", count: "12+" },
            ].map((team, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-accent mb-2">{team.count}</p>
                  <p className="text-muted-foreground">{team.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
