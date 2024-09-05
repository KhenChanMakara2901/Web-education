"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Course from "@/public/Course/Course.png";
import Course1 from "@/public/Course/Course1.png";
import Course2 from "@/public/Course/Course2.png";
import Course3 from "@/public/Course/Course3.png";
import Course4 from "@/public/Course/Course4.png";
import Course5 from "@/public/Course/Course5.png";
import QrCodeImage from "@/public/Course/QrCodeImage.jpg";
import { useEffect, useState } from "react";

export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coursePrice] = useState("150 USD"); // Static course price

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegister = () => {
    if (name && email) {
      setShowPopup(false);
      setTimeout(() => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 6000); // Show success message for 3 seconds
      }, 0);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="py-10 bg-white dark:bg-dark">
      <head>
        <title className=" font-extrabold">Course|KhmerCodeAcademy</title>
      </head>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl space-y-3 animate-fadeIn">
          <h1 className="text-4xl/tight sm:text-4xl/tight underline underline-offset-4 font-bold ">
            វគ្គសិក្សាដែលយេីងមានបង្រៀន៖
          </h1>
          <p className="text-xl underline underline-offset-4">
            ដែលនិស្សិតអាចជ្រេីសរេីស៖
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div
            data-aos="fade-up"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course3}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">NODE.JS + MY SQL</h1>
              <p className="text-xl line-clamp-2">•MySQL Create Database</p>
              <p className="text-xl line-clamp-2">•MySQL Create Table</p>
              <p className="text-xl line-clamp-2">•MySQL Insert Into</p>
              <p className="text-xl line-clamp-2">•MySQL Select From</p>
              <p className="text-xl line-clamp-2">•MySQL Order By</p>
              <p className="text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course1}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">NEXT.JS</h1>
              <p className="text-xl line-clamp-2">•Routing</p>
              <p className="text-xl line-clamp-2">•Data Fetching</p>
              <p className="text-xl line-clamp-2">•Rendering</p>
              <p className="text-xl line-clamp-2">•Caching</p>
              <p className="text-xl line-clamp-2">•Styling</p>
              <p className="text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course2}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">REACT.JS</h1>
              <p className="text-xl line-clamp-2">•Components</p>
              <p className="text-xl line-clamp-2">•Rendering</p>
              <p className="text-xl line-clamp-2">•Hooks</p>
              <p className="text-xl line-clamp-2">•Routers</p>
              <p className="text-xl line-clamp-2">•Stat Management</p>
              <p className="text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course4}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">ANGULAR.JS</h1>
              <p className="text-xl line-clamp-2">•Modules</p>
              <p className="text-xl line-clamp-2">•Directives</p>
              <p className="text-xl line-clamp-2">•Directive</p>
              <p className="text-xl line-clamp-2">•Data Binding</p>
              <p className="text-xl line-clamp-2">•Controllers</p>
              <p className="text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course5}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">VUE.JS</h1>
              <p className="text-xl line-clamp-2">•Directives</p>
              <p className="text-xl line-clamp-2">•Methods</p>
              <p className="text-xl line-clamp-2">•Event Modifiers</p>
              <p className="text-xl line-clamp-2">•Forms</p>
              <p className="text-xl line-clamp-2">•CSS Binding</p>
              <p className="text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative p-5 sm:p-6 md:p-8 rounded-lg  border space-y-6"
          >
            <Image
              src={Course}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5">
              <h1 className="font-semibold text-2xl ">HTML/CSS/JAVASCRIPT</h1>
              <p className="text-xl line-clamp-2">
                •HTML defines the structure of your content
              </p>
              <p className="text-xl line-clamp-2">
                •CSS determines the style and layout
              </p>
              <p className="text-xl line-clamp-2">
                •JavaScript makes the content interactive
              </p>
              <div className="w-max">
                <button
                  onClick={() => setShowPopup(true)}
                  className="px-8 h-12 border rounded-full flex items-center gap-x-3 bg-emerald-700 hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
            </div>
          </div>
          {/* Popup for QR Payment */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg w-96 relative">
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setShowPopup(false)}
                >
                  &times;
                </button>
                <h2 className="text-xl text-gray-900 font-bold mb-4">
                  សូមបំពេញព័ត៌មាន
                </h2>

                {/* Name input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900">
                    ឈ្មោះកាតរបស់អ្នក
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter card name"
                  />
                </div>

                {/* Email input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900">
                    អ៊ីម៉ែល
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Course price */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900">
                    តម្លៃវគ្គសិក្សា
                  </label>
                  <p className="mt-1 text-gray-900 text-lg font-semibold">
                    {coursePrice}
                  </p>
                </div>

                <Image
                  src={QrCodeImage}
                  alt="Scan QR for payment"
                  width={500}
                  height={200}
                  className="mx-auto"
                />
                <p className="mt-4 text-gray-900 text-center">
                  Scan QR code to complete payment
                </p>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleRegister}
                    className="bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-opacity-80"
                  >
                    ចុះឈ្មោះ
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Success message */}
          {showSuccess && (
            <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
              <p>ចុះឈ្មោះជោគជ័យ!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
