"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import CTA from "@/src/components/CTA/Index";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

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
          ទីតាំងរបស់យេីង | ខ្មែរកូដអាខាដឺមី
        </title>
      </head>
      <div className="px-6 py-12 mx-auto">
        <iframe
          data-aos="fade-up-right"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.673270226169!2d104.89705297572912!3d11.575263988626252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951006513b911%3A0xfb4a1347dd91260e!2sKhmer%20Code%20Academy!5e0!3m2!1sen!2skh!4v1725539834009!5m2!1sen!2skh"
          width="100%"
          height="550"
          loading="lazy"
        ></iframe>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
          <div
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
            data-aos="fade-up-right"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <MdEmail size={27} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              អ៊ីមែល:
            </h2>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              khmercodeacademy@gmail.com
            </p>
          </div>

          <div
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
            data-aos="fade-up-right"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <FaPhoneVolume size={25} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              លេខទំនាក់ទំនង:
            </h2>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              +855 70 256 959
            </p>
          </div>

          <div
            className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
            data-aos="fade-up-right"
          >
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <FaLocationDot size={25} />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              អាស័យដ្ឋាន:
            </h2>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ។
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
