import React from "react";
import WorkExperience from "../components/Resume/WorkExperience";
import Header from "../components/Resume/Header";
import Summary from "../components/Summary";
import Project from "../components/Resume/Project";
import Achievement from "../components/Resume/Achievement";
import Education from "../components/Resume/Education";

const DownloadResume = () => {
  return (
    <div className="w-[796px] h-100vh flex justify-center">
      <div className=" p-5">
        <Header />
        <div className=" flex">
          <div className="flex w-3/5 flex-col">
            <div className=" mr-20 mb-6">
              <Education />
            </div>
            <div className=" mr-20 mb-6">
              <WorkExperience />
            </div>
          </div>

          <div className="w-2/5 flex flex-col">
            <div className="mr-5 mb-6">
              <Summary />
            </div>
            <div>
              <Project />
            </div>
            <div>
              <Achievement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadResume;
