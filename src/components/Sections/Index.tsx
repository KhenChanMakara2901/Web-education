"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { courseData } from "./data.js";
import { AiOutlineClose } from "react-icons/ai";

// Modal Component
const CourseDetailModal = ({ show, onClose, course }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-dark rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-KhmerFont mb-4">{course.title}</h2>
        <Image
          src={course.image}
          alt={course.title}
          width={50}
          height={50}
          quality={75}
          className="mb-4 h-32 w-32 object-cover rounded-full"
        />
        <p className="text-2xl font-KhmerFont mb-4">{course.description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 flex items-center bg-green-700 text-white rounded-md"
        >
          <AiOutlineClose className="mr-2" /> Close
        </button>
      </div>
    </div>
  );
};

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Function to handle course click
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-white dark:bg-dark scroll-smooth">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col font-KhmerFont items-center text-center">
          <h2 className="text-3xl md:text-5xl" data-aos="fade-up">
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
              className="grid gap-6 p-8 md:p-10 dark:shadow-darkModeShadow font-KhmerFont shadow-lightModeShadow rounded-lg cursor-pointer"
              data-aos-delay={item.delay}
              onClick={() => handleCourseClick(item)} // Handle click event
            >
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                quality={75}
                className="inline-block h-16 w-16 object-cover rounded-full"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
              <h3
                className="text-2xl"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                {item.title}:
              </h3>
              <p
                className="text-base"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {selectedCourse && (
        <CourseDetailModal
          show={showModal}
          onClose={handleCloseModal}
          course={selectedCourse}
        />
      )}
    </div>
  );
};

export default Index;
