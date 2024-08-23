"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Link from "next/link";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div
          className="w-full border border-white relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900"
          data-aos="fade-up"
        >
          <div
            className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1
              className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              តេីនៅចាំដល់ពេលណាទៀត
              <span className="text-white">ចុះឈ្មោះចូលរៀនឥលូវនេះ</span>
            </h1>
            <p
              className="text-gray-700 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              រៀននៅថ្ងៃនេះ ជាស្ពានចម្លងទៅអនាគត និងអ្នកជំនាន់ក្រោយ។
              មើលពីភាពរីកចម្រើនពីក្នុងខ្លួន
              និងប្រជែងជាមួយខ្លួនឯងពីមួយថ្ងៃទៅមួយថ្ងៃ។ រៀនជាមួយ​ KCA
              រៀនដោយទំនុកចិត្ត និងរៀនដោយភាពច្បាសល់លាស់។
            </p>
            <div
              className="mx-auto max-w-md sm:max-w-xl flex justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link href="https://t.me/Kongsun">
                <button className="outline-none border border-white h-12 px-5 rounded-xl bg-green-700 text-white flex items-center hover:bg-gray-400">
                  ទំនាក់ទំនងមកកាន់យេីងឥឡូវនេះ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
