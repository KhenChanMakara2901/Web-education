"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoWeb from "@/public/LogoItem/LogoWeb.png";
import LogoWeb2 from "@/public/LogoItem/LogoWeb2.png";
import LogoWeb3 from "@/public/LogoItem/LogoWeb3.png";
import LogoWeb4 from "@/public/LogoItem/LogoWeb4.png";
import LogoWeb5 from "@/public/LogoItem/LogoWeb5.png";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-dark scroll-smooth">
      <div className="min-h-px w-full border-t"></div>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div
            className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
            data-aos="fade-up"
          >
            <Image
              src={LogoWeb}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div
            className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={LogoWeb2}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div
            className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={LogoWeb3}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div
            className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src={LogoWeb4}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div
            className="flex justify-center group p-6 bg-white dark:bg-dark dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src={LogoWeb5}
              alt="Logo"
              width={150}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
