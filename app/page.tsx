import FeatureCards from "@/components/FeatureCards";
import FeatureLists from "@/components/FeatureLists";
import FeaturesOne from "@/components/FeaturesOne";
import Hero from "@/components/Hero";
import { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: " PBRESULTVAULT - A Complete School Result Management Software",
  description:
    "The ultimate solution for managing and publishing student results online.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <FeatureLists />
      <FeaturesOne />
    </main>
  );
}
