import Image from "next/image";
import React from "react";

const FeatureCards = () => {
  return (
    <div className="bg-gray-100 px-2 py-10 pb-2">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Our result management system
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          simplifies School Academic Records
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <Image
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              width={10}
              height={10}
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Easy Report Card Generation
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Create fully customizable, data-driven, insightful termly report
              cards from our templates to reduce time taken on manual mark entry
              process.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <Image
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              width={10}
              height={10}
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Mark Entry Made Easy
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Our result management system simplifies the process of entering
              marks by providing an option for all types of mark calculations.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <Image
              src="https://www.svgrepo.com/show/530444/availability.svg"
              width={10}
              height={10}
              alt=""
              className="mx-auto h-10 w-className"
            />
            <h3 className="my-3 font-display font-medium">
              Performance Analysis
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Our result system is designed to help school analyze student
              performance, which enable the teachers support students who might
              need extra help.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureCards;
