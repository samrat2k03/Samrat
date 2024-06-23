import React from "react";
import Resume from "../Assets/resume/Samrat Resume.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Link } from "react-router-dom";

function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-[ZohoPuviRegular] font-semibold py-4">
        Samrat's Resume
      </h1>
      <div className="w-full lg:w-1/2 min-h-screen">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={Resume} />
        </Worker>
        <div className="flex justify-center py-5">
        <Link to="/">
      <button
        type="button"
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Back
      </button>
      </Link>
      </div>
      </div>

    </div>
  );
}

export default ResumePage;
