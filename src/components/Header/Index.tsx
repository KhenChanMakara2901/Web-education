"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Rupp from "@/public/Image/Logo/Rupp.png";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import khmerlang from "@/src/locales/Header/khmer.json";
import englishlang from "@/src/locales/Header/english.json";

const Index = () => {
  const pathname = usePathname();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [theme, setTheme] = useState<string>("dark");
  const [language, setLanguage] = useState("khmer");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "khmer" ? "english" : "khmer";
    setLanguage(newLanguage);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const t = language === "khmer" ? khmerlang : englishlang;

  return (
    <header
      className="fixed scroll-smooth top-0 inset-x-0 z-50 h-24 flex items-center bg-white shadow-md dark:bg-dark dark:shadow-xl transition-shadow"
      data-aos="fade-down"
    >
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-start">
            <div className="flex items-center gap-x-4 text-2xl font-semibold">
              <div className="flex items-center -space-x-3 font-semibold">
                <Link href="/">
                  <Image
                    className="rounded-2xl border"
                    src={Rupp}
                    alt="Logo"
                    width={75}
                    height={75}
                    quality={75}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`
            flex flex-col space-y-10 inset-0 fixed top-0  h-[75dvh]  bg-white dark:bg-dark lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${
              openNavbar
                ? "visible opacity-100 translate-y-0"
                : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
            }
          `}
          >
            <ul className="flex text-base font-KhmerFont flex-col gap-y-5 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li className="py-2 px-4 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-300">
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "bg-gray-200 dark:bg-gray-700 rounded-md"
                      : ""
                  } px-2 py-1`}
                  href="/"
                  passHref
                >
                  {t.home}
                </Link>
              </li>
              <li className="py-2 px-4 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-300">
                <Link
                  className={`link ${
                    pathname === "/AboutUs"
                      ? "bg-gray-200 dark:bg-gray-700 rounded-md"
                      : ""
                  } px-2 py-1`}
                  href="/AboutUs"
                  passHref
                >
                  {t.aboutUs}
                </Link>
              </li>
              <li className="relative group py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-300">
                <span className="flex items-center justify-between w-full cursor-pointer">
                  {t.courses}
                  <FaChevronDown className="ml-2 transform transition-transform duration-300 group-hover:rotate-180" />
                </span>
                <ul className="absolute left-0 mt-8 w-48 bg-white dark:bg-gray-800 rounded-none shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/Course/Web" className="block w-full">
                      Web Development
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/Course/Mobile" className="block w-full">
                      Mobile Development
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link href="/Course/Design" className="block w-full">
                      Design
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="py-2 px-4 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition duration-300">
                <Link
                  className={`link ${
                    pathname === "/ContactUs"
                      ? "bg-gray-200 dark:bg-gray-700 rounded-md"
                      : ""
                  } px-2 py-1`}
                  href="/ContactUs"
                  passHref
                >
                  {t.contactUs}
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="ml-2 bg-transparent border p-2 rounded-lg"
              >
                {language === "khmer" ? "EN" : "ខ្មែរ"}
              </button>
              <button
                onClick={toggleTheme}
                className="bg-transparent border p-2 rounded-lg flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <BsSun size={20} className="text-yellow-500" />
                ) : (
                  <BsMoon size={20} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-end z-60 lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="p-3 border rounded-full outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`
                w-6 h-0.5 rounded-full bg-gray-950 transition-transform duration-300 ease-linear
                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
              `}
              />
              <span
                className={`
                w-6 h-0.5 rounded-full bg-gray-950 transition-transform duration-300 ease-linear my-1
                ${openNavbar ? "-rotate-[40deg]" : ""}
              `}
              />
              <span
                className={`
                w-6 h-0.5 rounded-full bg-gray-950 transition-transform duration-300 ease-linear
                ${openNavbar ? "-translate-y-2 opacity-0" : ""}
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
