import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import after1 from "@/assets/before-after/after-1.webp";
import after2 from "@/assets/before-after/after-2.webp";
import after3 from "@/assets/before-after/after-3.webp";
import heroVideo from "@/assets/hero1.mp4";

const designStyles = [
  { id: "modern", name: "Modern", emoji: "🏢" },
  { id: "minimal", name: "Minimal", emoji: "⚪" },
  { id: "luxury", name: "Luxury", emoji: "💎" },
  { id: "classic", name: "Classic", emoji: "🏛️" },
  { id: "contemporary", name: "Contemporary", emoji: "🎨" },
  { id: "industrial", name: "Industrial", emoji: "🏭" },
];

const styleToImageMap: Record<string, string> = {
  modern: after1,
  minimal: after1,
  luxury: after2,
  classic: after2,
  contemporary: after3,
  industrial: after3,
};

export default function AIplan() {
  const { toast } = useToast();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        toast({
          title: "Image Uploaded",
          description: "Now select a design style to see the transformation!",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleGenerate = async () => {
    if (!uploadedImage || !selectedStyle) {
      toast({
        title: "Missing Information",
        description: "Please upload an image and select a design style.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Convert base64 to blob for FormData
      const response = await fetch(uploadedImage);
      const blob = await response.blob();
      const file = new File([blob], 'room.jpg', { type: 'image/jpeg' });

      const formData = new FormData();
      formData.append('image', file);
      formData.append('style', selectedStyle);

      const apiResponse = await fetch('http://localhost:3001/api/generate-design', {
        method: 'POST',
        body: formData,
      });

      if (!apiResponse.ok) {
        throw new Error('Failed to generate design');
      }

      const data = await apiResponse.json();
      setGeneratedImage(data.image);

      toast({
        title: "AI Design Ready!",
        description: "Your room has been transformed with the selected style.",
      });
    } catch (error) {
      console.error('Error generating design:', error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your design. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-accent/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <Sparkles className="w-5 h-5 text-white animate-spin" />
              <span className="text-sm font-medium text-white">AI-Powered Interior Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Visualize Your <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Dream Space</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Upload a photo of your room and see it transformed with different interior design styles using AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg shadow-[var(--shadow-gold)] bg-white text-black hover:bg-gray-100" asChild>
                <a href="#upload-section">
                  Get Started <Sparkles className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tool Section */}
      <section id="upload-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Upload Section */}
              <div>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {!uploadedImage ? (
                      <label className="flex flex-col items-center justify-center h-[400px] cursor-pointer hover:bg-muted/50 transition-colors">
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        <Upload className="w-16 h-16 text-muted-foreground mb-4" />
                        <p className="text-lg font-semibold mb-2">Upload Your Room Photo</p>
                        <p className="text-sm text-muted-foreground">Click to browse or drag and drop</p>
                        <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
                      </label>
                    ) : (
                      <div className="relative">
                        <img
                          src={generatedImage || uploadedImage}
                          alt={generatedImage ? "Generated design" : "Uploaded room"}
                          className="w-full h-[400px] object-cover"
                        />
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-4 right-4"
                          onClick={() => {
                            setUploadedImage(null);
                            setGeneratedImage(null);
                          }}
                        >
                          Change Image
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="mt-6 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2 text-accent" />
                    Tips for Best Results
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Use a well-lit photo with good visibility</li>
                    <li>• Capture the entire room in the frame</li>
                    <li>• Avoid extreme angles or filters</li>
                    <li>• Higher resolution photos work better</li>
                  </ul>
                </div>
              </div>

              {/* Style Selection */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Choose Your Design Style</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {designStyles.map((style) => (
                    <Card
                      key={style.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-elegant)] ${
                        selectedStyle === style.id
                          ? "ring-2 ring-accent shadow-[var(--shadow-elegant)]"
                          : ""
                      }`}
                      onClick={() => handleStyleSelect(style.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <span className="text-4xl mb-2 block">{style.emoji}</span>
                        <p className="font-semibold">{style.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleGenerate}
                  disabled={!uploadedImage || !selectedStyle || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Sparkles className="mr-2 w-5 h-5 animate-spin" />
                      Generating Design...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 w-5 h-5" />
                      Generate AI Design
                    </>
                  )}
                </Button>

                {selectedStyle && (
                  <div className="mt-6 p-6 bg-accent/10 rounded-lg">
                    <h3 className="font-semibold mb-2 text-accent">
                      {designStyles.find((s) => s.id === selectedStyle)?.name} Style
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      This style will transform your space with{" "}
                      {selectedStyle === "modern" && "clean lines, neutral colors, and contemporary furniture"}
                      {selectedStyle === "minimal" && "simplicity, functionality, and uncluttered spaces"}
                      {selectedStyle === "luxury" && "rich textures, premium materials, and elegant details"}
                      {selectedStyle === "classic" && "timeless elegance, traditional furniture, and ornate details"}
                      {selectedStyle === "contemporary" && "current trends, bold colors, and unique pieces"}
                      {selectedStyle === "industrial" && "exposed materials, metal accents, and urban aesthetics"}
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-accent">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Photo",
                  description: "Take or upload a photo of your room that you want to redesign",
                },
                {
                  step: "02",
                  title: "Select Style",
                  description: "Choose from various interior design styles that match your taste",
                },
                {
                  step: "03",
                  title: "Get Results",
                  description: "Our AI generates multiple design variations instantly for your review",
                },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-accent">
            Love What You See?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Let's turn these AI concepts into reality. Schedule a consultation with our design team.
          </p>
          <Button variant="hero" size="lg" className="text-lg shadow-[var(--shadow-gold)]" asChild>
            <Link to="/contact">
              Book Consultation Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
