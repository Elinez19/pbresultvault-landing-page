import Image from "next/image";

import React from "react";

const FeatureLists = () => {
  return (
    <section className="mb-20">
      <div className="max-w-xl mt-30 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div className="">
          <h2 className="text-5xl font-bold text-center sm:text-5xl">
            30+ Powerful Amazing Result Features.
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            PBResultVault is a completely full-featured result management system
            that meet your school needs. With over 30+ features and more still
            will be added as the need arises. We are sure of giving your school
            a stress free result reporting system.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark-bg-emerald-400 dark-text-gray-900">
                    <svg
                      className="w-45 h-45 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-3xl font-medium leading-tight ">
                    Manage & Push Your School Result To The Next Level
                  </h4>
                  <p className="mt-2 ">
                    Cut down the time taken for exam evaluations, mark
                    calculation, and report card generation by 90% using
                    PBResultVault. PBResultVault gives flexibility and clarity
                    to your school result regardless the result format.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark-bg-emerald-400 dark-text-gray-900">
                    <svg
                      className="w-45 h-45 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-3xl font-medium leadi ">
                    Advanced Quiz Generation{" "}
                  </h4>
                  <p className="mt-2 ">
                    Take your knowledge testing to the next level with advanced
                    quiz generation, providing more customization options for
                    your quizzes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              alt=""
              width="800"
              height="800"
              src="/pbresult-hero-2.png"
              className="mx-auto rounded-lg shadow-lg dark-bg-gray-500 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureLists;
