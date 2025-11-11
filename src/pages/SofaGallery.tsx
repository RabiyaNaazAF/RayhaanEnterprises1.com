import { Card } from "@/components/ui/card";
import sofa1 from "@/assets/services/sofa-1.jpg";
import sofa2 from "@/assets/services/sofa-2.jpg";
import sofa3 from "@/assets/services/sofa-3.jpg";
import sofa4 from "@/assets/services/sofa--4.jpg";
import sofa5 from "@/assets/services/sofa-5.jpg";
import sofa6 from "@/assets/services/sofa-6.jpg";

const galleryImages = [sofa1, sofa2, sofa3, sofa4, sofa5, sofa6];

export default function SofaGallery() {
  return (
    <div className="min-h-screen bg-background">
      {/* Unique Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sofa <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our exquisite collection of premium sofas in stunning detail
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
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
            <h2 className="text-3xl font-bold text-center mb-12">Collection Showcase</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
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
                  src={sofa1}
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
    </div>
  );
}
