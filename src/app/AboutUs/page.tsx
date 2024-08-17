import React from "react";
import Image from "next/image";
import KCA2 from "@/public/Image/Logo/KCA2.png";
import { FaCode } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-sky-900 py-20">
      <div className="mx-auto flex w-full max-w-7xl px-5 py-5 md:px-10 md:py-20 animate-fadeIn">
        <FaCode size={50} className="mr-1 text-white" />
        <h2 className="mb-3 underline text-white text-3xl font-bold md:text-5xl lg:mb-14">
          ខ្មែរកូដអាខាដឺមី
        </h2>
        <FaCode size={50} className="mr-1 text-white" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 animate-slideIn">
          <Image
            src={KCA2}
            alt="Image"
            className="inline-block border border-white h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-white p-10 sm:p-20 animate-scaleUp">
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
    </section>
  );
}
