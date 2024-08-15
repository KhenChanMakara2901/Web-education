import React from "react";
import Image from "next/image";
import KCA2 from "@/public/Image/Logo/KCA2.png";

export default function page() {
  return (
    <section className="bg-sky-900 py-20">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="mb-8 text-white text-3xl font-bold md:text-5xl lg:mb-14">
          ខ្មែរកូដ អាខាដឺមី:
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Image
            src={KCA2}
            alt="Image"
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-white p-10 sm:p-20">
            <h2 className="text-3xl text-white font-bold md:text-5xl">
              បេសកកម្មរបស់យើង:
            </h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
              bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
              Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
              curabitur vitae nunc. Dictumst vestibulum rhoncus est
              pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus.
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
