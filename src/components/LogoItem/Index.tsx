"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type Logo = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  delay: number;
};

export default function Index() {
  const [logos, setLogos] = useState<Logo[]>([]); // Specify the type for the logos array

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Fetch the logos from the JSON file
    fetch("/data/logos.json")
      .then((response) => response.json())
      .then((data: Logo[]) => setLogos(data)); // Ensure TypeScript knows the shape of the data
  }, []);

  return (
    <div className="bg-white dark:bg-dark scroll-smooth">
      <div className="min-h-px w-full border-t"></div>
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
              data-aos="fade-up"
              data-aos-delay={logo.delay}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                quality={75}
                className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
