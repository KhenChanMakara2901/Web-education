"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Image1 from "@/public/Hero/Image1.png";
import Image2 from "@/public/Hero/Image2.png";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    university: "",
    email: "",
    telegram: "",
    address: "",
    image: null,
    gender: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({ ...prevState, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          course: "",
          university: "",
          email: "",
          telegram: "",
          address: "",
          image: null,
          gender: "",
        });
        setImagePreview(null);
      }, 3000);
    }, 10000);
  };

  return (
    <div className="py-32 mt-24 scroll-smooth sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative bg-white dark:bg-dark">
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-sky-900 backdrop-filter blur-3xl opacity-50 animate-scaleUp" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-sky-400/30 backdrop-filter blur-3xl opacity-50 animate-fadeIn" />
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-sky-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0 animate-scaleUp">
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-sky-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-sky-400/30" />
        </div>
      </div>
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-sky-400/5 left-0 translate-y-[40%] -translate-x-[40%] bottom-0 animate-fadeIn">
        <div className="inset-[10%] rounded-full bg-gradient-to-r from-sky-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-sky-400/50" />
        </div>
      </div>
      <div
        className="absolute top-2 left-14 bg-opacity-80"
        data-aos="zoom-out-left"
      >
        <Image
          src={Image1}
          width={400}
          height={400}
          quality={100}
          alt="Human Illustration 1"
          className="object-cover"
        />
      </div>
      <div
        className="absolute bottom-20 right-0 bg-opacity-80"
        data-aos="zoom-out-right"
      >
        <Image
          src={Image2}
          width={500}
          height={500}
          quality={100}
          alt="Human Illustration 2"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 dark:bg-black/30"></div>

      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
        <div className="text-center flex flex-col items-center space-y-10">
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-GoogleFont px-3 py-0.5 rounded-2xl">
            KHMER <span className="text-yellow-400">CODE</span> ACADEMY
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl/tight xl:text-6xl/tight font-KhmerFont max-w-4xl capitalize dark:text-white">
            សិក្សាជំនាញគ្រប់គ្រងទិន្នន័យ
            និងការអភិវឌ្ឍន៍កម្មវិធីដែលសង្គមត្រូវការនៅពេលបច្ចុប្បន្ន
          </h1>
          <p className="text-lg text-center font-KhmerFont max-w-xl  dark:text-gray-300">
            យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព
            និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើង។
          </p>

          <div className="flex justify-center animate-scaleUp">
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 h-12 font-KhmerFont rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white flex items-center justify-center gap-x-3 transition-transform transform hover:scale-105 hover:shadow-xl"
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
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg w-full max-w-md relative"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l-4.95-4.95a.75.75 0 00-1.06 1.06L8.586 10l-4.95 4.95a.75.75 0 101.06 1.06L10 11.414l4.95 4.95a.75.75 0 101.06-1.06L11.414 10l4.95-4.95a.75.75 0 00-1.06-1.06L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              ចុះឈ្មោះសម្រាប់វគ្គសិក្សានៅខ្មែរកូដអាខាដឺមី
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 overflow-y-auto max-h-[70vh]" // Added scrolling
            >
              <div className="flex justify-between space-x-4">
                <div className="w-1/2">
                  <label className="block">នាមត្រកូល</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block">នាមខ្លួន</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block">អ៊ីមែល</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block">ភេទ</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">ជ្រើសរើសភេទ</option>
                  <option value="male">ប្រុស</option>
                  <option value="female">ស្រី</option>
                  <option value="other">ផ្សេងៗ</option>
                </select>
              </div>
              <div>
                <label className="block">លេខតេឡេក្រាម</label>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block">អាស័យដ្ឋានរបស់អ្នក</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block">វគ្គសិក្សា</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block">សាកលវិទ្យាល័យរបស់អ្នក</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block">បង្ហោះរូបភាព</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full border rounded-lg py-2 px-4"
                />
                {imagePreview && (
                  <div className="flex justify-center mt-4">
                    <img
                      src={imagePreview}
                      alt="Image Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-600 text-white rounded-full"
                  disabled={loading}
                >
                  {loading ? "កំពុងបញ្ជូន....." : "ដាក់ស្នើ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <svg
              className="animate-spin h-10 w-10 text-emerald-600 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <p className="mt-4 text-gray-900">កំពុងដំណើរការ.....</p>
          </div>
        </div>
      )}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white text-gray-950 p-8 rounded-lg shadow-lg text-center"
            data-aos="zoom-in-up"
          >
            <h2 className="text-2xl font-bold mb-4">ជោគជ័យ!!!</h2>
            <p>
              ការចុះឈ្មោះរបស់អ្នកបានជោគជ័យ។
              <br />
              ចំណាំ:ក្រុមការងាររបស់យេីងនឹងទាក់ទងទៅអ្នកឆាប់ៗ
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
