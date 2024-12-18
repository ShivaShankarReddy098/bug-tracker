import Contact from "@/pages/ContactPage";
import Features from "@/pages/FeaturePage";
import Home from "@/pages/HeroPage";
import Testimonials from "@/pages/TestimonialsPage";

export default function page() {
  return (
    <div>
      <Home />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}
