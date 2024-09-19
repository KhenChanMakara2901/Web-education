"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Avarta from "@/public/Testimonial/Avarta.png";

const testimonials = [
  {
    name: "ខេន ចាន់មករា",
    title: "និស្សិត / RUPP",
    feedback:
      "ក្នុងនាមជានិស្សិតដែលបានសិក្សានៅ Khmer Code Academy ខ្ញុំមានសេចក្តីសោមនស្សរីករាយជាខ្លាំងដែលអាចផ្តល់ឱ្យនិស្សិតនូវឱកាសដើម្បីរៀន Front end Development ដែលជាជំនាញដ៏ពេញនិយមបំផុតមួយនៅក្នុងវិស័យឌីជីថល។",
    avatar: Avarta,
  },
  {
    name: "សុវណ្ណ ស្រីម៉ៅ",
    title: "និស្សិត / ITC",
    feedback:
      "ក្នុងនាមជានិស្សិតដែលបានសិក្សានៅ Khmer Code Academy ខ្ញុំមានសេចក្តីសោមនស្សរីករាយជាខ្លាំងដែលអាចផ្តល់ឱ្យនិស្សិតនូវឱកាសដើម្បីរៀន Front end Development ដែលជាជំនាញដ៏ពេញនិយមបំផុតមួយនៅក្នុងវិស័យឌីជីថល។",
    avatar: Avarta,
  },
  {
    name: "គីម សាវី",
    title: "និស្សិត / Norton University",
    feedback:
      "ក្នុងនាមជានិស្សិតដែលបានសិក្សានៅ Khmer Code Academy ខ្ញុំមានសេចក្តីសោមនស្សរីករាយជាខ្លាំងដែលអាចផ្តល់ឱ្យនិស្សិតនូវឱកាសដើម្បីរៀន Front end Development ដែលជាជំនាញដ៏ពេញនិយមបំផុតមួយនៅក្នុងវិស័យឌីជីថល។",
    avatar: Avarta,
  },
];

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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 md:p-6 space-y-6 dark:shadow-darkModeShadow shadow-lightModeShadow rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="font-medium">{testimonial.feedback}</p>
              <div className="flex items-start gap-4">
                <Image
                  src={testimonial.avatar}
                  width={100}
                  height={100}
                  quality={75}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full flex object-cover"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none">
                    {testimonial.name}
                  </h2>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
