import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import AISection from "@/components/AISection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CategoriesSection />
    <ProductsSection />
    <AISection />
    <TrustSection />
    <Footer />
  </div>
);

export default Index;
