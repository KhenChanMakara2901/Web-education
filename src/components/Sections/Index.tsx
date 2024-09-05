"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Course from "@/public/Sections/Course.png";
import Code from "@/public/Sections/Code.png";
import Student from "@/public/Sections/Student.png";
import Video from "@/public/Sections/Video.png";
import Service from "@/public/Sections/Service.png";
import Education from "@/public/Sections/Education.png";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="bg-white dark:bg-dark scroll-smooth">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl" data-aos="fade-up">
            ខ្មែរកូដ អាខាដឺមី
          </h2>
          <p
            className="mb-8 mt-4 max-w-xl text-base md:mb-12 md:text-lg lg:mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ស្គាល់ពីស្ថាប័ន ស្គាល់ពីយើង និងចាប់ផ្តើមជាមួយគ្នា
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={Code}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">អនុវត្តការសរសេរកូដ:</h3>
            <p className="text-lg">
              យេីងផ្ដេាតទៅលេីការសសេរកូដអនុវត្តទៅលេីគម្រោងជាក់ស្ដែង។
            </p>
          </div>
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src={Course}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">វគ្គសិក្សា:</h3>
            <p className="text-lg">
              ពួកយេីងបានបង្កេីតជាវគ្គសិក្សាដែលសិស្សអាចជ្រេីសរេីស។
            </p>
          </div>
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src={Student}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">និស្សិតក្នុងការអប់រំ:</h3>
            <p className="text-lg">
              រហូតមកដល់ពេលនេះ យើងបានបង្រៀនសិស្សជាច្រើននាក់រួចមកហើយ រួមមាននិស្សិត
              បុគ្គលិកមកពីស្ថាប័នឯកជន និងរដ្ឋជាដើម។
            </p>
          </div>
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Image
              src={Video}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">បង្កើតជាវីដេអូ:</h3>
            <p className="text-lg">
              យើងផលិតវីដេអូ ទាំងកំឡុងពេលបង្រៀន
              និងសម្រាប់អ្នកដែលមិនអាចមករៀននៅក្នុងថ្នាក់ផ្ទាល់បាន
              អាចជាវបានជាមួយនឹងគុណភាព និងតម្លៃសមរម្យ។
            </p>
          </div>
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image
              src={Service}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">មានជាសេវាកម្ម:</h3>
            <p className="text-lg">
              ក្រៅអំពីការបង្រៀន យើងក៏មានផ្តល់ជាសេវាកម្មប្រឹក្សា ប្រមូល រៀបចំ
              សម្អាត និងវិភាគទិន្នន័យទៅលើផ្នែកដែលពាក់ព័ន្ធ។
            </p>
          </div>
          <div
            className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Image
              src={Education}
              alt="Image"
              width={50}
              className="inline-block h-16 w-16 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold">ការផ្ដល់ជាអាហារូបករណ៍:</h3>
            <p className="text-lg">
              យើងតែងតែផ្តល់ជាអាហារូបករណ៍ដល់សិស្សានុសិស្សដែលចង់ចាប់យក
              និងផ្តោតលើជំនាញផែនទី។ ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់យើងខ្ញុំ។
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
