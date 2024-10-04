"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import AnotherImage2 from "@/public/Image/Logo/AnotherImage2.png";
import AnotherImage3 from "@/public/Image/Logo/AnotherImage3.png";
import AnotherImage4 from "@/public/Image/Logo/AnotherImage4.png";
import Head from "next/head";
import Sections from "@/src/components/Sections/Index";

const aboutUsContent = {
  sections: [
    {
      id: 1,
      title: "រឿងរបស់យើង:",
      content:
        "ដំណើររបស់យើងត្រូវបានជំរុញដោយចំណង់ចំណូលចិត្តក្នុងការបំប្លែងគំនិតទៅជា បទពិសោធន៍ដែលមើលឃើញយ៉ាងស៊ីជម្រៅ។ បង្កើតឡើងដោយមានចក្ខុវិស័យទៅ ធ្វើបដិវត្តពិភពនៃមាតិកាវីដេអូ យើងបានវិវត្តទៅជាមួយ។ មជ្ឈមណ្ឌលនៃភាពច្នៃប្រឌិត និងការច្នៃប្រឌិត។",
      className: "text-2xl md:text-3xl font-bold",
    },
    {
      id: 2,
      title: "បេសកម្មរបស់យើង:",
      content:
        "បេសកកម្មរបស់យើងគឺច្បាស់លាស់៖ ដើម្បីផ្តល់អំណាចដល់ម៉ាកយីហោតាមរយៈអ្វីដែលមិនអាចប្រៀបផ្ទឹមបាន។ អំណាចនៃការនិទានរឿង។ យើងជឿថាគ្រប់ម៉ាកទាំងអស់សុទ្ធតែមានលក្ខណៈពិសេស narrative រង់ចាំដើម្បីប្រាប់ហើយបេសកម្មរបស់យើងគឺដើម្បីនាំយកពួកគេ។ រឿងរ៉ាវនៃជីវិតជាមួយនឹងភាពត្រឹមត្រូវ ការច្នៃប្រឌិត និងផលប៉ះពាល់។",
      className: "text-2xl md:text-3xl font-semibold",
    },
    {
      id: 3,
      title: "វិធីសាស្រ្តរបស់យេីង:",
      content:
        "អ្វី​ដែល​ធ្វើ​ឲ្យ​យើង​ដាច់​ពី​គ្នា​គឺ​វិធីសាស្ត្រ​រួម​របស់​យើង​ក្នុង​ការ​ផលិត​វីដេអូ។ ពីគំនិតរហូតដល់ការបង្កើត និងការផ្សព្វផ្សាយ យើងណែនាំអតិថិជនរបស់យើង។ ឆ្លងកាត់គ្រប់ជំហាន ធានានូវដំណើរការគ្មានថ្នេរ និងមានប្រសិទ្ធភាព។ យើងរួមបញ្ចូលគ្នានូវភាពច្នៃប្រឌិតជាមួយនឹងយុទ្ធសាស្ត្រ បង្កើតខ្លឹមសារដែលមិនមែន មើលទៅគួរឱ្យភ្ញាក់ផ្អើល ប៉ុន្តែក៏ទទួលបានលទ្ធផលជាក់ស្តែងផងដែរ។",
      className: "text-2xl md:text-3xl font-bold",
    },
  ],
};

export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [AnotherImage2, AnotherImage3, AnotherImage4]; // Array of images

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white dark:bg-dark">
      <Head>
        <title>អំពីពួកយើង | ខ្មែរកូដអាខាដឺមី</title>
      </Head>
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col gap-14 lg:gap-20">
          <div
            className="relative border-4 rounded-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <Image
              quality={100}
              src={images[currentImage]}
              alt="Auto-Changing-Image"
              className="w-full h-full object-cover border rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col font-KhmerFont gap-14 lg:gap-20">
            {aboutUsContent.sections.map((section) => (
              <div
                key={section.id}
                className="flex flex-col md:flex-row gap-5"
                data-aos="fade-up"
              >
                <h2
                  className={`${section.className} flex-1 underline underline-offset-8`}
                >
                  {section.title}
                </h2>
                <p className="flex-1 text-xl border border-gray-300 p-4 rounded-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sections />
    </div>
  );
}
