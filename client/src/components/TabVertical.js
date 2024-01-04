import React, { useState } from "react";
import Other from "./Other";
import Summary from "./Summary";
import BasicInfo from "./BasicInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";

const sections = [
  {
    id: 1,
    title: "Basic Info",
  },
  {
    id: 2,
    title: "Work Experience",
  },
  {
    id: 3,
    title: "Projects",
  },
  {
    id: 4,
    title: "Education",
  },
  {
    id: 5,
    title: "Achievements",
  },
  {
    id: 6,
    title: "Summary",
  },
  {
    id: 7,
    title: "Others",
  },
];
const content = [
  {
    id: 1,
    Description: (
      <div>
        <BasicInfo />
      </div>
    ),
  },
  {
    id: 2,
    Description: (
      <div>
        <WorkExperience />
      </div>
    ),
  },
  {
    id: 3,
    Description: (
      <div>
        <Projects />
      </div>
    ),
  },
  {
    id: 4,
    Description: (
      <div>
        <Education />
      </div>
    ),
  },
  {
    id: 5,
    Description: (
      <div>
        <h1>Achievements</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          sequi quia harum libero reiciendis, ipsum ex officiis blanditiis fuga
          ratione non id debitis, molestias incidunt atque in, perspiciatis
          quaerat praesentium.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    Description: (
      <div>
        <Summary />
      </div>
    ),
  },
  {
    id: 7,
    Description: (
      <div>
        <Other />
      </div>
    ),
  },
];

const TabVertical = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (id) => {
    setToggle(id);
    console.log(id);
  };

  return (
    <div className="w-[780px] m-auto mt-5 p-5 bg-white dark:bg-gray-900  ">
      <div className="md:flex">
        <ul className="flex-column  md:w-72  space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {sections.map((item) => {
            return (
              <li
                key={item.id}
                className={` ${
                  toggle === item.id
                    ? "inline-flex items-center px-4 py-3 cursor-pointer text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
                    : "inline-flex items-center px-4 py-3 cursor-pointer rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                onClick={() => toggleTab(item.id)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        ;
        {content.map((item) => {
          return (
            <div
              key={item.id}
              className={` ${
                toggle === item.id
                  ? "p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full"
                  : "hidden"
              }`}
            >
              {item.Description}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabVertical;
