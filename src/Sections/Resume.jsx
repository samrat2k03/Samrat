import resume from "../Assets/resume/Samrat's Resume.pdf"
import { Link } from "react-router-dom";

function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Samrat_Resume.pdf";
    link.click();
  };

  return (
    <div className="bg-gray-200 pt-10 h-auto">
      <h1 className="text-center font-[ZohoPuviSemibold] text-[2rem] pt-5">
        Resume
      </h1>
      <p className="text-center lg:text-[20px] text-md py-2 pb-4 font-[ZohoPuviRegular] hover:text-blue-700 cursor-pointer">
        This is a brief description of my qualifications, experience, education, and skills.
      </p>
      {/* <div className="flex lg:flex-row gap-10 justify-center items-center">
        <button
          type="button"
          className="font-[ZohoPuviRegular] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={downloadResume}
        >
          <span className="pr-2">
            Download Resume
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
          >
            <g strokeWidth="2" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#f1f1f1"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  id="Vector"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <button
          type="button"
          className="font-[ZohoPuviRegular] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Resume
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div> */}
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center pb-10">
  <button
    type="button"
    className="font-[ZohoPuviRegular] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 lg:mb-0"
    onClick={downloadResume}
  >
    <span className="pr-2">
      Download Resume
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
    >
      <g strokeWidth="2" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / Download">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#f1f1f1"
            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            id="Vector"
          ></path>
        </g>
      </g>
    </svg>
  </button>
  <Link to="/samrat-resume">
  <button
    type="button"
    className="font-[ZohoPuviRegular] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    View Resume
    <svg
      className="w-3.5 h-3.5 ml-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </button>
  </Link>
</div>

    </div>
  );
}

export default Resume;
