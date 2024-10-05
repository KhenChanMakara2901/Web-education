"use client";
import { FormEvent, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function Index() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (name && email && message) {
      setStep(2);

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const result = await res.json();
        console.log(result); // Log result to debug

        if (result.success) {
          setTimeout(() => {
            setStep(3);
            setTimeout(() => {
              setStep(0);
              setName("");
              setEmail("");
              setMessage("");
            }, 5000);
          }, 3000);
        } else {
          alert(result.message || "Failed to send email");
          setStep(0);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while sending email");
        setStep(0);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div className="py-24 scroll-smooth bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div
          className="w-full border border-white relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900"
          data-aos="fade-up"
        >
          <div
            className="mx-auto font-KhmerFont text-center max-w-xl md:max-w-2xl relative space-y-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1
              className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              តេីនៅចាំដល់ពេលណាទៀត
              <span>ចុះឈ្មោះចូលរៀនឥលូវនេះ</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              រៀននៅថ្ងៃនេះ ជាស្ពានចម្លងទៅអនាគត និងអ្នកជំនាន់ក្រោយ។
              មើលពីភាពរីកចម្រើនពីក្នុងខ្លួន
              និងប្រជែងជាមួយខ្លួនឯងពីមួយថ្ងៃទៅមួយថ្ងៃ។ រៀនជាមួយ​ KCA
              រៀនដោយទំនុកចិត្ត និងរៀនដោយភាពច្បាស់លាស់។
            </p>
            <div
              className="mx-auto max-w-md sm:max-w-xl flex justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => setStep(1)}
                className="outline-none border border-white h-12 px-5 rounded-xl bg-green-700 text-white flex items-center hover:bg-gray-400"
              >
                ទំនាក់ទំនងមកកាន់យើងឥឡូវនេះ
              </button>
            </div>
          </div>
        </div>
      </div>
      {step === 1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white dark:bg-dark p-8 rounded-lg w-96 relative"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <button
              className="absolute top-2 right-2 w-10 h-10 text-2xl"
              onClick={() => setStep(0)} // Close the pop-up
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">ទំនាក់ទំនងយើង</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">ឈ្មោះ</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">អ៊ីម៉ែល</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium">សាររបស់អ្នក</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-opacity-80"
                >
                  បញ្ជូន
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-dark p-8 rounded-lg w-96 text-center">
            <h2 className="text-xl font-KhmerFont mb-4">
              កំពុងផ្ញើសាររបស់អ្នក...
            </h2>
            {/* Loading spinner */}
            <div className="loader mx-auto h-12 w-12 border-4 border-gray-300 border-t-emerald-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white dark:bg-dark p-8 rounded-lg w-96 text-center"
            data-aos="zoom-in-up"
          >
            <h2 className="text-xl font-KhmerFont mb-4">
              សាររបស់អ្នកបានផ្ញើជោគជ័យ!
            </h2>
            <p className="font-KhmerFont">សូមអរគុណចំពោះការទំនាក់ទំនងយើង។</p>
          </div>
        </div>
      )}
    </div>
  );
}
