import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="py-32 scroll-smooth sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative bg-white dark:bg-dark">
      <div
        className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-sky-900
 backdrop-filter blur-3xl opacity-50 animate-scaleUp"
      />
      <div
        className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-sky-400/30
 backdrop-filter blur-3xl opacity-50 animate-fadeIn"
      />
      <div
        className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-sky-400/5 right-0
 -translate-y-[40%] translate-x-[40%] top-0 animate-scaleUp"
      >
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-sky-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-sky-400/30" />
        </div>
      </div>
      <div
        className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-sky-400/5 left-0
 translate-y-[40%] -translate-x-[40%] bottom-0 animate-fadeIn"
      >
        <div className="inset-[10%] rounded-full bg-gradient-to-r from-sky-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-sky-400/50" />
        </div>
      </div>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center flex flex-col items-center space-y-10">
          <span className="border text-4xl font-serif px-3 py-0.5 rounded-2xl bg-opacity-50 animate-scaleUp">
            KHMER <span className="text-yellow-400">CODE</span> ACADEMY
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl/tight xl:text-5xl/tight  font-bold max-w-4xl capitalize animate-fadeIn">
            សិក្សាជំនាញគ្រប់គ្រងទិន្នន័យ
            និងការអភិវឌ្ឍន៍កម្មវិធីដែលសង្គមត្រូវការនៅពេលបច្ចុប្បន្ន
          </h1>
          <p className="text-base text-center max-w-xl animate-fadeIn">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព
            និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើង។
          </p>

          <div className="flex justify-center animate-scaleUp">
            <Link
              href="https://t.me/Kongsun"
              className="px-8 h-12 rounded-full border border-white flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
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
