import React from "react";
import { Cairo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const cairo = Cairo({ subsets: ["latin"] });

function ArabicPage() {
  return (
    <div dir="rtl" className={cairo.className}>
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[850px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              مدونتنا
            </span>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              اكتشف قوة النباتات الطبية والعطرية العضوية
            </h2>
            <p className="text-base text-secondary">
              استكشف عالم النباتات الطبية والعطرية العضوية. تعرف على فوائدها،
              وطرق زراعتها، واستخداماتها في تطبيقات متنوعة.
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <Image
                width={350}
                height={350}
                src="/images/medicinal-plants/mint.jpeg"
                alt="نبات النعناع"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                1 ديسمبر، 2024
              </span>
              <h3>
                <Link
                  href="/blog/Mint"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  النعناع: منشط طبيعي للهضم وأكثر من ذلك
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                اكتشف الفوائد المذهلة للنعناع العضوي. من مساعدة الهضم إلى تحسين
                المزاج، يمكن لهذه العشبة المتنوعة تعزيز رفاهيتك العامة.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <Image
                width={350}
                height={350}
                src="/images/medicinal-plants/basil.jpg"
                alt="نبات الريحان"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                1 ديسمبر، 2024
              </span>
              <h3>
                <Link
                  href="blog/Basil"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  الريحان: متعة طهي وعشبة صحية
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                ارفع مستوى طبخك وصحتك بالريحان العضوي. تعرف على قيمته الغذائية،
                والاستخدامات الطهي، والفوائد الصحية المحتملة.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <Image
                width={350}
                height={350}
                src="/images/medicinal-plants/dill.jpg"
                alt="نبات الشبت"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                1 ديسمبر، 2024
              </span>
              <h3>
                <Link
                  href="/blog/Dill"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  الشبت: عشبة متعددة الاستخدامات للهضم والنكهة
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                اكتشف الاستخدامات العديدة للشبت، من تحسين أطباقك إلى دعم صحتك
                الهضمية. تعرف على كيفية زراعة الشبت العضوي، وطهيه، والتمتع به.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <Image
                width={350}
                height={350}
                src="/images/medicinal-plants/chamomile.jpeg"
                alt="نبات البابونج"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                1 ديسمبر، 2024
              </span>
              <h3>
                <Link
                  href="/blog/Chamomile"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  البابونج: إكسير طبيعي مهدئ للاسترخاء والنوم
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                جد الراحة من التوتر والأرق مع البابونج. تعرف على كيفية استخدام
                هذه العشبة المهدئة لتعزيز الاسترخاء وتحسين جودة نومك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicPage;
