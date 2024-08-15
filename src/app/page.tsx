import Image from "next/image";
import Hero from "@/src/components/Hero/Index";
import Features from "@/src/components/Features/Index";
import LogoItem from "@/src/components/LogoItem/Index";
import Sections from "@/src/components/Sections/Index";
import Testimonial from "@/src/components/Testimonial/Index";
import CTA from "@/src/components/CTA/Index";
import ScrollToTop from "../components/ScrollToTop/Index";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <LogoItem />
      <Features />
      <Sections />
      <Testimonial />
      <CTA />
    </>
  );
}
