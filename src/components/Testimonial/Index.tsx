"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Avarta from "@/public/Testimonial/Avarta.png";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div id="Testimonial" className="py-20 bg-white dark:bg-dark scroll-smooth">
      <div className="min-h-px w-full border-t pt-8"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl">
          <h1 className="font-bold text-3xl" data-aos="fade-up">
            មតិរបស់និស្សិត:
          </h1>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="p-5 md:p-6 space-y-6 dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay for each item
            >
              <p className="font-medium">
                ក្នុងនាមជានិស្សិតដែលបានសិក្សានៅ Khmer Code Academy
                ខ្ញុំមានសេចក្តីសោមនស្សរីករាយជាខ្លាំងដែលអាចផ្តល់ឱ្យនិស្សិតនូវឱកាសដើម្បីរៀន
                Front end Development
                ដែលជាជំនាញដ៏ពេញនិយមបំផុតមួយនៅក្នុងវិស័យឌីជីថល។
              </p>
              <div className="flex items-start gap-4">
                <Image
                  src={Avarta}
                  width={100}
                  alt="Author avatar"
                  className="w-12 h-12 rounded-full flex object-cover"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none">
                    ខេន ចាន់មករា
                  </h2>
                  <p>និស្សិត / RUPP</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
