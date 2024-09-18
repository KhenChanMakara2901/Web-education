import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div
      className="relative py-32 scroll-smooth sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center bg-fixed bg-cover bg-center bg-white dark:bg-dark"
      style={{
        backgroundImage:
          "url('https://wallpaper-house.com/data/out/8/wallpaper2you_293598.jpg')", // Replace with your image path
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 dark:bg-black/30"></div>

      <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 z-10">
        <div className="text-center flex flex-col items-center space-y-10">
          <span className="border text-4xl font-serif px-3 py-0.5 rounded-2xl bg-opacity-50 bg-white/20 backdrop-blur-lg animate-scaleUp text-white shadow-lg">
            KHMER <span className="text-yellow-400">CODE</span> ACADEMY
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl/tight xl:text-5xl/tight font-bold max-w-4xl capitalize animate-fadeIn text-white shadow-lg">
            សិក្សាជំនាញគ្រប់គ្រងទិន្នន័យ
            និងការអភិវឌ្ឍន៍កម្មវិធីដែលសង្គមត្រូវការនៅពេលបច្ចុប្បន្ន
          </h1>
          <p className="text-base text-center max-w-xl animate-fadeIn text-white shadow-md">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព
            និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើង។
          </p>

          <div className="flex justify-center animate-scaleUp">
            <Link
              href="https://t.me/Kongsun"
              className="px-8 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white flex items-center justify-center gap-x-3 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              ចុះឈ្មោះឥឡូវនេះ
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
