import React from "react";
import Link from "next/link";
import Image from "next/image";

function EnglishPage() {
  return (
    <>
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[850px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Our Blogs
            </span>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Discover the Power of Organic Medicinal and Aromatic Plants
            </h2>
            <p className="text-base text-secondary">
              Explore the world of organic medicinal and aromatic plants. Learn
              about their benefits, cultivation, and uses in various
              applications.
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
                alt="Mint plant"
                className="w-full"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                Dec 1, 2024
              </span>
              <h3>
                <Link
                  href="/blog/Mint"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Mint: Nature&apos;s Refreshing Remedy for Digestion and More
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                Discover the incredible benefits of organic mint. From aiding
                digestion to boosting mood, this versatile herb can enhance your
                overall well-being.
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
                alt="Basil plant"
                className="w-full"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                Dec 1, 2024
              </span>
              <h3>
                <Link
                  href="/blog/Basil"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Basil: A Culinary Delight and Healthful Herb
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                Elevate your cooking and your health with organic basil. Learn
                about its nutritional value, culinary uses, and potential health
                benefits.
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
                alt="Dill plant"
                className="w-full"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                Dec 1, 2024
              </span>
              <h3>
                <Link
                  href="/blog/Dill"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Dill: A Versatile Herb for Digestion and Flavor
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                Discover the many uses of dill, from enhancing your dishes to
                supporting your digestive health. Learn how to grow, cook, and
                enjoy this versatile herb.
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
                alt="Chamomile plant"
                className="w-full"
              />
            </div>
            <div>
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                Dec 1, 2024
              </span>
              <h3>
                <Link
                  href="/blog/Chamomile"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  Chamomile: Nature&apos;s Soothing Elixir for Relaxation and Sleep
                </Link>
              </h3>
              <p className="text-base text-secondary ">
                Find relief from stress and insomnia with chamomile. Learn how
                this calming herb can promote relaxation and improve your sleep
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnglishPage;
