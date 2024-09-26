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
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    fetch("/data/logos.json")
      .then((response) => response.json())
      .then((data: Logo[]) => setLogos(data));
  }, []);

  return (
    <div className="relative bg-white dark:bg-dark scroll-smooth">
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 opacity-30"
        aria-hidden="true"
      ></div>
      <div className="min-h-px w-full border-t"></div>
      <div className="relative mx-auto w-full max-w-screen-2xl px-5 py-16 md:px-10 md:py-20">
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
