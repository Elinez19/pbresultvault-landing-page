import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline pr-5">Powerful School Result</span>
            <span className="block text-purple-900 xl:inline ">
              Management System
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Pbresultvault is a powerful online student results management system
            developed by Purplebee.
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            PBRESULTVAULT helps simplify and digitise students academic data and
            records. It is easy to use, fast and efficient, secure,
            customizable, reliable, and dynamic.
          </p>
          {/* <!-- Button Section --> */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-900 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
                Register your School
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Simplify students Records
              </a>
            </div>
          </div>
          {/* <!-- End of Button Section --> */}
        </div>

        {/* <!--   Image Section     --> */}
        <div className=" relative aspect-[700/444] w-full">
          <Image
            className="shadow-solid-l dark:hidden"
            src="/pbresult-hero-1.png"
            alt="Hero"
            fill
          />
          <Image
            className="hidden shadow-solid-l dark:block"
            src="/pbresult-hero-1.png"
            alt="Hero"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
