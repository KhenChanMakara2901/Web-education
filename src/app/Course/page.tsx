import React from "react";
import Image from "next/image";
import Link from "next/link";
import Course from "@/public/Course/Course.png";
import Course1 from "@/public/Course/Course1.png";
import Course2 from "@/public/Course/Course2.png";
import Course3 from "@/public/Course/Course3.png";
import Course4 from "@/public/Course/Course4.png";
import Course5 from "@/public/Course/Course5.png";
import Head from "next/head";

export default function page() {
  return (
    <div className="py-20 mt-20 bg-sky-900">
      <head>
        <title>Course/KCA.com</title>
      </head>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl space-y-3 animate-fadeIn">
          <h1 className="text-4xl/tight sm:text-4xl/tight underline underline-offset-4 font-bold text-white">
            វគ្គសិក្សាដែលយេីងមានបង្រៀន៖
          </h1>
          <p className="text-slate-100 text-xl underline underline-offset-4">
            ដែលនិស្សិតអាចជ្រេីសរេីស៖
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 animate-scaleUp">
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-white space-y-6">
            <Image
              src={Course3}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">
                NODE.JS + MY SQL
              </h1>
              <p className="text-slate-200 text-xl line-clamp-2">
                •MySQL Create Database
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •MySQL Create Table
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •MySQL Insert Into
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •MySQL Select From
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •MySQL Order By
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <Link
                  href="#https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-white space-y-6">
            <Image
              src={Course1}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">NEXT.JS</h1>
              <p className="text-slate-200 text-xl line-clamp-2">•Routing</p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •Data Fetching
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Rendering</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Caching</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Styling</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <Link
                  href="https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-white space-y-6">
            <Image
              src={Course2}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">REACT.JS</h1>
              <p className="text-slate-200 text-xl line-clamp-2">•Components</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Rendering</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Hooks</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Routers</p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •Stat Management
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <Link
                  href="https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-white space-y-6">
            <Image
              src={Course4}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">ANGULAR.JS</h1>
              <p className="text-slate-200 text-xl line-clamp-2">•Modules</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Directives</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Directive</p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •Data Binding
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •Controllers
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <Link
                  href="https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-white space-y-6">
            <Image
              src={Course5}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">VUE.JS</h1>
              <p className="text-slate-200 text-xl line-clamp-2">•Directives</p>
              <p className="text-slate-200 text-xl line-clamp-2">•Methods</p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •Event Modifiers
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Forms</p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •CSS Binding
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">•Other</p>
              <div className="w-max">
                <Link
                  href="https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-sky-950 border border-gray-200 space-y-6">
            <Image
              src={Course}
              alt="project cover"
              width={1500}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-white">
                HTML/CSS/JAVASCRIPT
              </h1>
              <p className="text-slate-200 text-xl line-clamp-2">
                •HTML defines the structure of your content
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •CSS determines the style and layout
              </p>
              <p className="text-slate-200 text-xl line-clamp-2">
                •JavaScript makes the content interactive
              </p>
              <div className="w-max">
                <Link
                  href="https://t.me/Kongsun"
                  className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
