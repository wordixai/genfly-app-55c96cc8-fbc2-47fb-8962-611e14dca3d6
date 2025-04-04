import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Café Aroma | Taste the Warmth in Every Moment";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Café Aroma - A modern café offering handcrafted coffee, fresh pastries, and a cozy urban retreat. Visit us today or order online."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <About />
      <MenuPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;