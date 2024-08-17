import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-sky-900 py-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl flex lg:max-w-4xl mx-auto animate-slideIn">
          <FaMapMarkerAlt size={50} className="text-white mr-1" />
          <h2 className="text-5xl font-extrabold underline text-white">
            ទីតាំងរបស់យើង៖
          </h2>
        </div>
        <div className="mt-20 lg:mt-20 animate-slideIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-white overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d73824.51612940856!2d104.8416573804732!3d11.539825730124445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951006513b911%3A0xfb4a1347dd91260e!2sKhmer%20Code%20Academy!5e0!3m2!1sen!2skh!4v1723657662983!5m2!1sen!2skh"
                width="100%"
                height="800"
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4 animate-fadeIn">
                  <h3 className="text-2xl underline font-medium text-white">
                    ⟟ អាស័យដ្ឋានរបស់យើង:
                  </h3>
                  <p className="mt-5 text-xl text-white">
                    ⚲ អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក
                    រាជធានីភ្នំពេញ។
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 animate-fadeIn">
                  <h3 className="text-2xl underline font-medium text-white">
                    🧭 ម៉ោងធ្វើការ:
                  </h3>
                  <p className="mt-5 text-xl text-white">
                    ច័ន្ទ - សុក្រៈ ៩ ព្រឹក - 8 ល្ងាច
                  </p>
                  <p className="mt-5 text-xl text-white">
                    ថ្ងៃសៅរ៍: 10 ព្រឹក - 8:30 យប់
                  </p>
                  <p className="mt-5 text-xl text-white">ថ្ងៃអាទិត្យ៖ បិទ</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 animate-fadeIn">
                  <h3 className="text-2xl underline font-medium text-white">
                    @ ប្រព័ន្ធទំនាក់ទំនង:
                  </h3>
                  <p className="mt-5 text-xl text-white">
                    ✉️ -អ៊ីមែល: khmercodeacademy@gmail.com
                  </p>
                  <p className="mt-5 text-xl text-white">
                    ☎ -លេខទូរស័ព្ទ: 070 256 959
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
