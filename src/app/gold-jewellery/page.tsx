import { Hero } from "@/components/sections/Hero";
import { GoldCollections } from "@/components/sections/GoldCollections";
import { Legacy } from "@/components/sections/Legacy";
import { VisionMission } from "@/components/sections/VisionMission";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Showrooms } from "@/components/sections/Showrooms";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Gold Jewellery in Abu Dhabi | Al Siraj Jewellery",
  description: "Explore premium gold jewellery in Abu Dhabi.",
};

export default function GoldJewelleryPage() {
  return (
    <div className="flex flex-col">
      <h1 style={{ display: "none" }}>Gold Jewellery in Abu Dhabi</h1>
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
