import { Hero } from "@/components/sections/Hero";
import { GoldCollections } from "@/components/sections/GoldCollections";
import { Legacy } from "@/components/sections/Legacy";
import { VisionMission } from "@/components/sections/VisionMission";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Showrooms } from "@/components/sections/Showrooms";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <GoldCollections />
      <Legacy />
      <VisionMission />
      <ProductCategories />
      <Showrooms />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
