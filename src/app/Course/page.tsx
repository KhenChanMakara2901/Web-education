"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseImage1 from "@/public/Course/Course1.png";
import CourseImage2 from "@/public/Course/Course2.png";
import CourseImage3 from "@/public/Course/Course3.png";
import CourseImage4 from "@/public/Course/Course4.png";
import CourseImage5 from "@/public/Course/Course5.png";
import Course from "@/public/Course/Course.png";
import QrCodeImage from "@/public/Course/QrCodeImage.jpg";

const courses = [
  {
    id: 1,
    title: "NODE.JS + MY SQL",
    description: [
      "MySQL Create Database",
      "MySQL Create Table",
      "MySQL Insert Into",
      "MySQL Select From",
      "MySQL Order By",
      "Other",
    ],
    imageSrc: CourseImage3,
  },
  {
    id: 2,
    title: "NEXT.JS",
    description: [
      "Routing",
      "Data Fetching",
      "Rendering",
      "Caching",
      "Styling",
      "Other",
    ],
    imageSrc: CourseImage1,
  },
  {
    id: 3,
    title: "REACT.JS",
    description: [
      "Components",
      "Rendering",
      "Hooks",
      "Routers",
      "State Management",
      "Other",
    ],
    imageSrc: CourseImage2,
  },
  {
    id: 4,
    title: "ANGULAR.JS",
    description: [
      "Modules",
      "Directives",
      "Data Binding",
      "Controllers",
      "Other",
    ],
    imageSrc: CourseImage4,
  },
  {
    id: 5,
    title: "VUE.JS",
    description: [
      "Directives",
      "Methods",
      "Event Modifiers",
      "Forms",
      "CSS Binding",
      "Other",
    ],
    imageSrc: CourseImage5,
  },
  {
    id: 6,
    title: "HTML/CSS/JAVASCRIPT",
    description: [
      "HTML defines the structure of your content",
      "CSS determines the style and layout",
      "JavaScript makes the content interactive",
    ],
    imageSrc: Course,
  },
];

export default function CoursePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [coursePrice] = useState("150 USD");
  const [courseName, setCourseName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegister = () => {
    if (name && email && university && imageFile) {
      setLoading(true);
      setTimeout(() => {
        setShowQR(true);
        setShowPopup(false);
        setLoading(false);
        console.log("Image File:", imageFile);
        clearForm();
      }, 5000);
    } else {
      alert("Please fill in all fields, including uploading an image.");
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setUniversity("");
    setCourseName("");
    setImageFile(null);
    setImagePreview(null);
  };

  const handlePayment = () => {
    setTimeout(() => {
      setShowQR(false);
      setShowSuccess(true);
    }, 3000);
    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  };

  return (
    <div className="py-10 bg-white dark:bg-dark">
      <head>
        <title className="font-extrabold">វគ្គសិក្សា | ខ្មែរកូដអាខាដឺមី</title>
      </head>
      <div className="max-w-4xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-3xl space-y-3 animate-fadeIn">
          <h1 className="text-4xl/tight sm:text-4xl/tight underline underline-offset-4 font-bold">
            វគ្គសិក្សាដែលយេីងមានបង្រៀន៖
          </h1>
          <p className="text-xl underline underline-offset-4">
            ដែលនិស្សិតអាចជ្រេីសរេីស៖
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <div
              key={course.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative p-5 sm:p-6 md:p-8 rounded-lg border space-y-6"
            >
              <Image
                src={course.imageSrc}
                alt={`Cover for ${course.title}`}
                width={500}
                height={500}
                quality={75}
                priority
                className="w-full aspect-[4/3.3] rounded object-cover"
              />
              <div className="flex flex-col justify-end space-y-5">
                <h1 className="font-semibold text-2xl">{course.title}</h1>
                {course.description.map((desc, i) => (
                  <p key={i} className="text-xl line-clamp-2">
                    • {desc}
                  </p>
                ))}
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
          ))}
        </div>
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  ឈ្មោះរបស់អ្នក
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  អ៊ីម៉ែល
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  សាលា
                </label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ឈ្មោះសាកលវិទ្យាល័យរបស់អ្នក"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  ឈ្មោះវគ្គសិក្សា
                </label>
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="បញ្ចូលឈ្មោះវគ្គសិក្សា"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  បង្ហោះរូបភាពរបស់អ្នក
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  accept="image/*"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Uploaded Preview"
                      className="rounded-lg shadow-lg"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900">
                  តម្លៃវគ្គសិក្សា
                </label>
                <p className="mt-1 text-gray-900 text-lg font-semibold">
                  {coursePrice}
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  className={`bg-emerald-700 text-white px-6 py-2 rounded-lg ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-opacity-80"
                  }`}
                >
                  {loading ? "កំពុងដំណើរការ..." : "បញ្ជូន"}
                </button>
              </div>
            </div>
          </div>
        )}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowQR(false)}
              >
                &times;
              </button>
              <h2 className="text-xl text-gray-900 font-bold mb-4">
                សូមស្គេន QR Code
              </h2>
              <Image
                src={QrCodeImage}
                alt="Scan QR for payment"
                width={500}
                height={500}
                className="mx-auto"
              />
              <p className="mt-4 text-gray-900 text-center">
                សូមស្កេនដេីម្បីបង់ថ្លៃមុនពេលចុចទូទាត់
              </p>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handlePayment}
                  className="bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-opacity-80"
                >
                  បញ្ចប់ការទូទាត់
                </button>
              </div>
            </div>
          </div>
        )}
        {showSuccess && (
          <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out transform">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg font-semibold">ចុះឈ្មោះជោគជ័យ!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
