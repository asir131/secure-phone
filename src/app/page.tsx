import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import WorkStep from "@/components/WorkStep";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <WorkStep></WorkStep>
      <Pricing></Pricing>
    </div>
  );
}
