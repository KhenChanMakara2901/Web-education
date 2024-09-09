"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import KCA2 from "@/public/Image/Logo/KCA2.png";
import Head from "next/head";
import Sections from "@/src/components/Sections/Index";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-dark">
      <head>
        <title className="text-white font-extrabold">
          អំពីពួកយើង | ខ្មែរកូដអាខាដឺមី
        </title>
      </head>
      <div className="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col gap-14 lg:gap-20">
          <Image
            src={KCA2}
            alt="About-Image"
            className="w-full border rounded-xl"
            data-aos="fade-up"
          />
          <div className="flex flex-col gap-14 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-5" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold flex-1 underline underline-offset-8">
                រឿងរបស់យើង:
              </h2>
              <p className="flex-1 text-xl">
                ដំណើររបស់យើងត្រូវបានជំរុញដោយចំណង់ចំណូលចិត្តក្នុងការបំប្លែងគំនិតទៅជា
                បទពិសោធន៍ដែលមើលឃើញយ៉ាងស៊ីជម្រៅ។ បង្កើតឡើងដោយមានចក្ខុវិស័យទៅ
                ធ្វើបដិវត្តពិភពនៃមាតិកាវីដេអូ យើងបានវិវត្តទៅជាមួយ។
                មជ្ឈមណ្ឌលនៃភាពច្នៃប្រឌិត និងការច្នៃប្រឌិត។
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-semibold flex-1 underline underline-offset-8">
                បេសកកម្មរបស់យើង:
              </h2>
              <p className="flex-1 text-xl">
                បេសកកម្មរបស់យើងគឺច្បាស់លាស់៖
                ដើម្បីផ្តល់អំណាចដល់ម៉ាកយីហោតាមរយៈអ្វីដែលមិនអាចប្រៀបផ្ទឹមបាន។
                អំណាចនៃការនិទានរឿង។ យើងជឿថាគ្រប់ម៉ាកទាំងអស់សុទ្ធតែមានលក្ខណៈពិសេស
                narrative
                រង់ចាំដើម្បីប្រាប់ហើយបេសកកម្មរបស់យើងគឺដើម្បីនាំយកពួកគេ។
                រឿងរ៉ាវនៃជីវិតជាមួយនឹងភាពត្រឹមត្រូវ ការច្នៃប្រឌិត និងផលប៉ះពាល់។
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold flex-1 underline underline-offset-8">
                វិធីសាស្រ្តរបស់យេីង:
              </h2>
              <p className="flex-1 text-xl">
                អ្វី​ដែល​ធ្វើ​ឲ្យ​យើង​ដាច់​ពី​គ្នា​គឺ​វិធីសាស្ត្រ​រួម​របស់​យើង​ក្នុង​ការ​ផលិត​វីដេអូ។
                ពីគំនិតរហូតដល់ការបង្កើត និងការផ្សព្វផ្សាយ
                យើងណែនាំអតិថិជនរបស់យើង។ ឆ្លងកាត់គ្រប់ជំហាន
                ធានានូវដំណើរការគ្មានថ្នេរ និងមានប្រសិទ្ធភាព។
                យើងរួមបញ្ចូលគ្នានូវភាពច្នៃប្រឌិតជាមួយនឹងយុទ្ធសាស្ត្រ
                បង្កើតខ្លឹមសារដែលមិនមែន មើលទៅគួរឱ្យភ្ញាក់ផ្អើល
                ប៉ុន្តែក៏ទទួលបានលទ្ធផលជាក់ស្តែងផងដែរ។
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sections />
    </section>
  );
}
