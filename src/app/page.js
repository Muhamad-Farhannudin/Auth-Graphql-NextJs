"use client"
import { useEffect, useState } from "react";

import Header from "@/components/Header";

import Modal from "../components/Modal"

import Image from "next/legacy/image";
import Link from "next/link";

export default function HomePage() {
  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-full mx-auto scroll-smooth">
      {
        isLoading ? ( 
          <div className="flex flex-col gap-3 items-center justify-center h-screen">
            <h1 className="text-xl text-slate-800 font-bold">Loading</h1>
            <div className="flex">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-1 animate-bounce"></div>
            </div>
          </div>

        ) : (
          <>
            <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-12">
              <Header />
            </div>

            <section className="relative mb-28">

              <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex">
                  <div className="w-full lg:w-6/12 pt-52">
                    <h1 className="text-accent-2 font-bold text-sm lg:text-xl uppercase mb-6">
                      Best Destinations around the world
                    </h1>
                    <h2 className='text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[89px] tracking-tighter mb-8'>
                      Travel,{" "}
                      <span className="relative">
                        enjoy
                      </span>{" "}
                      and live a new and full life</h2>
                    <p className="text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                    <div className="flex">
                      <Link href="/"
                        className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl">Find out more
                      </Link>

                      <button className="flex items-center" onClick={() => setActive((prev) => !prev)}>
                        <span className="mr-6 bg-accent-2 shadow-accent-2/30 inline-flex items-center justify-center px-4 py-4 rounded-full text-white shadow-sm-[0_15px_30px]">
                          <span className="material-symbols-outlined ">
                            play_arrow
                          </span>
                        </span>
                        <span className="hidden lg:block text-gray-500">Play Demo</span>
                      </button>
                      <Modal
                        isActive={isActive}
                        setActive={setActive}
                        wrapperClassName='w-[750px]'
                      >
                        <h3 className="text-lg font-serif mb-2">20 Best Places To Visit in Germany | Travel Guide</h3>
                        <div className="aspect-video">
                          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iX8UPMDU1iY?si=tVw7iyYrslqPOSIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <div className="hidden lg:block w-[783px] h-[764px] pt-24 relative">
                    <div className="absolute w-[137px] h-[95px] top-36 left-16 z-30">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/images/plane.png"
                      />
                    </div>
                    <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/images/plane.png"
                      />
                    </div>
                    <div className="relative z-20 transform -translate-x-16">
                      <Image
                        priority
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/images/hero-traveller.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      }
    </div >
  );
}