"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import IMage1 from "@/public/Features/IMage1.png";
import Phone from "@/public/Features/Phone.png";
import Mail from "@/public/Features/Mail.png";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="py-24 scroll-smooth bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        <div
          className="flex md:flex-1 border border-white rounded-xl"
          data-aos="fade-right"
        >
          <Image
            src={IMage1}
            alt="creative agency"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-12 md:py-8">
          <h1
            className="font-semibold text-xl sm:text-2xl md:text-3xl"
            data-aos="fade-up"
          >
            មិនគ្រាន់តែបង្រៀន យើងតែងតែឈឺឆ្អាល
            និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុតមួយតាមដែលអាចធ្វើបាន
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា
            និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន
            ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។
            ការបង្កើតធនធានមនុស្សជាមួយនឹងជំនាញដ៏ពិតប្រាកដមួយ
            ជាគោលដៅរបស់ស្ថាប័នក៏ដូចជាក្រុមរបស់យើងខ្ញុំ។ ភាពត្រេកអររបស់អ្នក
            ជាក្តីអំណររបស់ក្រុមយើងខ្ញុំ។
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="tel:+243"
              className="flex gap-x-6 items-start"
              rel="noreferer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="p-3 md:p-3.5 bg-white rounded-full flex w-max">
                <Image src={Phone} alt="Phone" width={50} />
              </span>
              <div className="space-y-0.5 flex flex-col flex-1">
                <p>លេខទូរស័ព្ទ:</p>
                <p className="font-semibold text-lg">(+855) 70 256 959</p>
              </div>
            </a>
            <a
              href="mailto:"
              className="flex gap-x-6 items-start"
              rel="noreferer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="p-3 md:p-3.5 rounded-full bg-white flex w-max">
                <Image src={Mail} alt="Mail" width={50} />
              </span>
              <div className="space-y-0.5 flex flex-col flex-1">
                <p>អ៊ីមែល:</p>
                <p className="font-semibold text-lg">Academy@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="flex">
            <Link
              href="https://t.me/Kongsun"
              className="px-5 border h-11 flex items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              សាងល្បងឥឡូវនេះ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
