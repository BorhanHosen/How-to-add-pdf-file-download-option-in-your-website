import React from "react";

const Education = () => {
  return (
    <div className="bg-slate-500 p-5 rounded-md">
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="section-name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Section Name
          </label>
          <input
            type="section-name"
            id="section-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Section Name"
            required
          />
        </div>
        <div className="flex">
          <div class="mb-5 mr-2 w-1/2">
            <label
              for="program"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Study Program
            </label>
            <input
              type="text"
              id="program"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Study Program"
              required
            />
          </div>
          <div class="mb-5 ml-2 w-1/2">
            <label
              for="intitution"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Intitution/Place of Education
            </label>
            <input
              type="text"
              id="intitution"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Intitution/Place of Education"
              required
            />
          </div>
        </div>

        <div className="flex">
          <div class="mb-5 mr-2 w-1/2">
            <label
              for="cgpa"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CGPA
            </label>
            <input
              type="text"
              id="cgpa"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0.00/4.00"
              required
            />
          </div>
          <div class="mb-5 ml-2 w-1/2">
            <label
              for="location"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="location"
              id="location"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City, Country"
              required
            />
          </div>
        </div>
        <div className="flex">
          <div class="mb-5 mr-2 w-1/2">
            <label
              for="start-date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Start Date"
              value="2023-01-01"
              required
            />
          </div>
          <div class="mb-5 ml-2 w-1/2">
            <label
              for="end-date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="End Date"
              value="2023-01-01"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Education;
