import React from "react";

const HomeComponent = () => {
  return (
    <div>
      <h1 class="mb-4 mt-[100px] text-center  font-extrabold text-gray-900  text-6xl">
        Welcome to{" "}
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Creative School
        </span>
      </h1>
      <p class="text-4xl mt-12 text-center font-bold text-gray-500 ">
        <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          PDF Generator
        </mark>{" "}
        Using <span class="text-blue-600 dark:text-blue-500">Puppeteer</span>
      </p>
      <p class="text-3xl mt-12 text-center font-bold text-gray-500 ">
        It's a{" "}
        <mark class="px-2 text-white bg-orange-600 rounded dark:bg-orange-500">
          Resume Builder
        </mark>{" "}
        <span class="text-blue-600 dark:text-blue-500">Website</span>
      </p>
      <p class="text-3xl mt-12 text-center font-bold text-gray-500 ">
        Don't forget to{" "}
        <mark class="px-2 text-white bg-red-600 rounded dark:bg-red-500">
          Subscribe Our Channel
        </mark>{" "}
      </p>
    </div>
  );
};

export default HomeComponent;
