import React from "react";
import Image from "next/image";
import facebook from "@/public/Footer/facebook.svg";
import telegram from "@/public/Footer/telegram.svg";
import tiktok from "@/public/Footer/tiktok.svg";
import youtube from "@/public/Footer/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-blue-950 py-12">
      <div className="min-h-px w-full border-t border-white pt-5"></div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
              © Copyright 2024.KCA
            </p>
          </div>
          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white transition-all duration-200 hover:underline"
                >
                  ទំព័រដើម
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs"
                  className="text-sm text-white transition-all duration-200 hover:underline"
                >
                  អំពីពួកយើង
                </Link>
              </li>
              <li>
                <Link
                  href="/Course"
                  className="text-sm text-white transition-all duration-200 hover:underline"
                >
                  វគ្គសិក្សា
                </Link>
              </li>
              <li>
                <Link
                  href="#Testimonial"
                  className="text-sm text-white transition-all duration-200 hover:underline"
                >
                  មតិរបស់សិស្ស
                </Link>
              </li>
            </ul>
            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>
            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <p className="text-lg text-white font-medium">ភ្ជាប់ជាមួយយើង:</p>
              <li className="group">
                <Link href="https://www.facebook.com/khmercodeacademy?mibextid=LQQJ4d">
                  <Image
                    className="ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
                    src={facebook}
                    alt="Logo"
                    width={30}
                  />
                </Link>
              </li>
              <li className="group">
                <Link href="https://t.me/khmercodeacademy">
                  <Image
                    className="ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
                    src={telegram}
                    alt="Logo"
                    width={30}
                  />
                </Link>
              </li>
              <li className="group">
                <Link href="https://www.tiktok.com/@khmer_code_academy?_t=8oQBNiqWkga&_r=1">
                  <Image
                    className="ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
                    src={tiktok}
                    alt="Logo"
                    width={30}
                  />
                </Link>
              </li>
              <li className="group">
                <Link href="http://www.youtube.com/@khmercodeacademy">
                  <Image
                    className="ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-110"
                    src={youtube}
                    alt="Logo"
                    width={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
