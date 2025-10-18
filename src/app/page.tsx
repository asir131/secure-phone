import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import WorkStep from "@/components/WorkStep";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      <Hero />
      <WorkStep></WorkStep>
      <Pricing></Pricing>
      <Faq></Faq>
    </div>
  );
}
