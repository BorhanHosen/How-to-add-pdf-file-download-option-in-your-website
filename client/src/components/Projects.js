import React from "react";

const Projects = () => {
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

        <div class="mb-5 ">
          <label
            for="project-name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Name
          </label>
          <input
            type="text"
            id="project-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Name"
            required
          />
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
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your Project Description here..."
        ></textarea>
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

export default Projects;
