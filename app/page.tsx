import CustomerShowcase from "@/components/Sections/CustomerShowcase/CustomerShowcase";
import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <div className="bg-black overflow-x-clip">
      <HeroSection/>
      <CustomerShowcase/>
    </div>
  );
}
