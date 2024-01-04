import React, { useState } from "react";
import WorkExperience from "../components/Resume/WorkExperience";
import Header from "../components/Resume/Header";
import Summary from "../components/Summary";
import Project from "../components/Resume/Project";
import Achievement from "../components/Resume/Achievement";
import Education from "../components/Resume/Education";
import axios from "axios";
import Navbar from "../components/Navbar";

const Resume = () => {
  const [pdfLoading, setPdfLoading] = useState(false);

  const getPDF = async () => {
    setPdfLoading(true);
    return await axios.get(`http://localhost:8000/api/GetPDF`, {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf",
      },
    });
  };

  const savePDF = () => {
    return getPDF() // API call
      .then((response) => {
        console.log(response);
        const blob = new Blob([response.data], { type: "application/pdf" });
        console.log(blob);
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "My Resume.pdf");
        document.body.appendChild(link);
        link.click();
        setPdfLoading(false);
      })
      .catch((err) => console.log("adasd"));
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-[796px] shadow-2xl p-5">
          <button
            type="button"
            onClick={savePDF}
            disabled={pdfLoading}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {pdfLoading ? "Downloading..." : "Download PDF"}
          </button>
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
    </div>
  );
};

export default Resume;
