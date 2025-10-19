

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import WorkStep from "@/components/WorkStep";
import Image from "next/image";
import ellipse from "@/assets/side.png";

export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>

      <Hero />
      <Image
        className="absolute top-0"
        src={ellipse}
        width={800}
        height={400}
        alt=""
      />

      <WorkStep></WorkStep>
      <Image
        className="absolute top-300"
        src={ellipse}
        width={800}
        height={400}
        alt=""
      />
      <Pricing></Pricing>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
