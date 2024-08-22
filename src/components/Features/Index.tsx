import Image from "next/image";
import Link from "next/link";
import IMage1 from "@/public/Features/IMage1.png";
import Phone from "@/public/Features/Phone.png";
import Mail from "@/public/Features/Mail.png";

const Index = () => {
  return (
    <div className="bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        <div className="flex md:flex-1 border border-white rounded-xl">
          <Image
            src={IMage1}
            alt="creative agency "
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300 md:py-8">
          <h1 className="text-white dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            មិនគ្រាន់តែបង្រៀន យើងតែងតែឈឺឆ្អាល
            និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុតមួយតាមដែលអាចធ្វើបាន
          </h1>
          <p>
            យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា
            និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន
            ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។
            ការបង្កើតធនធានមនុស្សជាមួយនឹងជំនាញដ៏ពិតប្រាកដមួយ
            ជាគោលដៅរបស់ស្ថាប័នក៏ដូចជាក្រុមរបស់យើងខ្ញុំ។ ភាពត្រេកអររបស់អ្នក
            ជាក្តីអំណររបស់ក្រុមយើងខ្ញុំ។
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="tel:+243"
              className="flex gap-x-6 items-start"
              rel="noreferer"
            >
              <span className="p-3 md:p-3.5  bg-white rounded-full text-gray-200 flex w-max">
                <Image src={Phone} alt="Logo" width={50} />
              </span>
              <div className="space-y-0.5 flex flex-col flex-1">
                <p className="text-white">លេខទូរស័ព្ទ:</p>
                <p className="font-semibold text-white text-lg">
                  (+855) 70 256 959
                </p>
              </div>
            </a>
            <a
              href="mailto:"
              className="flex gap-x-6 items-start"
              rel="noreferer"
            >
              <span className="p-3 md:p-3.5 rounded-full bg-gray-100 text-gray-200 flex w-max">
                <Image src={Mail} alt="Logo" width={50} />
              </span>
              <div className="space-y-0.5 flex flex-col flex-1">
                <p className="text-white">អ៊ីមែល:</p>
                <p className="font-semibold text-white text-lg">
                  Academy@gmail.com
                </p>
              </div>
            </a>
          </div>
          <div className="flex">
            <Link
              href="https://t.me/Kongsun"
              className="px-5 border border-white hover:bg-gray-500 h-11 flex items-center bg-gray-900 dark:bg-green-700 rounded-lg text-gray-900 dark:text-white"
            >
              សាងល្បងឥឡូវនេះ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
