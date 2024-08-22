"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Rupp from "@/public/Image/Logo/Rupp.png";
import { IoHome } from "react-icons/io5";
import { FaUserGraduate, FaBookBookmark } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Index = () => {
  const pathname = usePathname();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <header className="bg-blue-950 sticky top-0 inset-x-0 z-50 h-24 flex items-center">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <div className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex items-center -space-x-3 font-semibold">
                <Image
                  className="rounded-xl border border-white"
                  src={Rupp}
                  alt="Logo"
                  width={80}
                />
              </div>
            </div>
          </div>
          <div
            className={`
            flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] shadow-lg bg-blue-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${
              openNavbar
                ? "visible opacity-100 translate-y-0"
                : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
            }
          `}
          >
            <ul className="flex text-xl flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li className="text-xl py-4 flex hover:underline underline-offset-4">
                <IoHome size={25} className="mr-1" />
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "active underline decoration-4 decoration-white text-gray-400"
                      : ""
                  }`}
                  href="/"
                >
                  ទំព័រដើម
                </Link>
              </li>
              <li className="text-xl py-4 flex hover:underline underline-offset-4">
                <FaUserGraduate size={25} className="mr-1" />
                <Link
                  className={`link ${
                    pathname === "/AboutUs"
                      ? "active underline decoration-4 decoration-white text-gray-400"
                      : ""
                  }`}
                  href="/AboutUs"
                >
                  អំពីពួកយើង
                </Link>
              </li>
              <li className="text-xl py-4 flex hover:underline underline-offset-4">
                <FaBookBookmark size={25} className="mr-1" />
                <Link
                  className={`link ${
                    pathname === "/Course"
                      ? "active underline decoration-4 decoration-white text-gray-400"
                      : ""
                  }`}
                  href="/Course"
                >
                  វគ្គសិក្សា
                </Link>
              </li>
              <li className="text-xl py-4 flex hover:underline underline-offset-4">
                <FaMapMarkedAlt size={25} className="mr-1" />
                <Link
                  className={`link ${
                    pathname === "/ContactUs"
                      ? "active underline decoration-4 decoration-white text-gray-400"
                      : ""
                  }`}
                  href="/ContactUs"
                >
                  ទីតាំងរបស់យេីង
                </Link>
              </li>
            </ul>
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center hover:underline hover:decoration-4 rounded-2xl">
              <BiSolidContact size={25} className="mr-1 text-white" />
              <Link
                href="https://t.me/Kongsun"
                className="flex text-xl justify-center gap-x-3 items-center text-gray-300 hover:text-gray-400
                 bg-transparent"
              >
                ទំនាក់ទំនង
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
            <button
              onClick={toggleTheme}
              className="ml-2 text-gray-700 dark:text-gray-300 bg-transparent p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? "🌙" : "🔆"}
            </button>
          </div>
          <div className="relative flex items-center justify-end z-60 lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
                w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
              `}
              />
              <span
                className={`
                w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "scale-x-0 opacity-0" : ""}
              `}
              />
              <span
                className={`
                w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Index;
