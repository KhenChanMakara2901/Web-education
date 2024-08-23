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
    <div className="bg-blue-950">
      <Head>
        <title>About Us|KhmerCodeAcademy</title>
      </Head>
      <div className="mx-auto flex w-full max-w-7xl px-5 py-5 md:px-10 md:py-10 animate-fadeIn">
        <h2 className="mb-3 underline underline-offset-8 text-white text-3xl font-bold md:text-5xl lg:mb-14">
          ហេតុអ្វីបានជាអ្នកគួរជ្រើសរើសពួកយើង
        </h2>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div data-aos="fade-up">
            <Image
              src={KCA2}
              alt="Image"
              className="inline-block border border-white h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col gap-5 rounded-2xl border border-solid border-white p-10 sm:p-20"
          >
            <h2 className="text-3xl underline text-white font-bold md:text-5xl mt-5">
              បេសកកម្មរបស់យើង:
            </h2>
            <p className="text-2xl text-white sm:text-3xl">
              យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា
              និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន
              ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។
              ការបង្កើតធនធានមនុស្សជាមួយនឹងជំនាញដ៏ពិតប្រាកដមួយ
              ជាគោលដៅរបស់ស្ថាប័នក៏ដូចជាក្រុមរបស់យើងខ្ញុំ។ ភាពត្រេកអររបស់អ្នក
              ជាក្តីអំណររបស់ក្រុមយើងខ្ញុំ។
              <br />
              មិនគ្រាន់តែបង្រៀន យើងតែងតែឈឺឆ្អាល
              និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុតមួយតាមដែលអាចធ្វើបាន
            </p>
          </div>
        </div>
      </div>
      <Sections />
    </div>
  );
}
