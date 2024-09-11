"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { courseData } from "./data.js";

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
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-20">
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
          {courseData.map((item) => (
            <div
              key={item.id}
              className="grid gap-6 rounded-md p-8 md:p-10 border border-white shadow-sm shadow-gray-500"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="inline-block h-16 w-16 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold">{item.title}:</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
