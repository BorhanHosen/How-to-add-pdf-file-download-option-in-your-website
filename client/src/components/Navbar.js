import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import axios from "axios";

const Navbar = () => {
  const [pdfLoading, setPdfLoading] = useState(false);

  const getPDF = async () => {
    setPdfLoading(true);
    return await axios.get(`http://localhost:8000/api/downloadHome`, {
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
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="http://localhost:3000/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} class="h-8" alt="Creative School Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Creative School
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Resume
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={savePDF}
                  disabled={pdfLoading}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {pdfLoading ? "Downloading..." : "Download PDF"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
