import React from "react";
import Image from "next/image";
import LogoWeb from "@/public/LogoItem/LogoWeb.png";
import LogoWeb2 from "@/public/LogoItem/LogoWeb2.png";
import LogoWeb3 from "@/public/LogoItem/LogoWeb3.png";
import LogoWeb4 from "@/public/LogoItem/LogoWeb4.png";
import LogoWeb5 from "@/public/LogoItem/LogoWeb5.png";

export default function Index() {
  return (
    <section className="bg-sky-900">
      <div className="min-h-px w-full border-t border-white"></div>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center group">
            <Image
              src={LogoWeb}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-center group">
            <Image
              src={LogoWeb2}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-center group">
            <Image
              src={LogoWeb3}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-center group">
            <Image
              src={LogoWeb4}
              alt="Logo"
              width={100}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-center group">
            <Image
              src={LogoWeb5}
              alt="Logo"
              width={150}
              className="inline-block ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
