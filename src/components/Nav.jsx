// import React from "react";

function Nav() {
  return (
    <>
      {" "}
      <header className="w-full bg-white text-[#667085] py-4 px-8 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <div className="flex mx-7 text-2xl text-[#023047] font-bold">
            <span className="mx-2">
              <svg
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="27.667"
                  height="24"
                  rx="6.59467"
                  fill="#023047"
                  stroke="#023047"
                  stroke-width="2.74778"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.0384 9.60334H19.9101C17.482 9.60334 15.5137 11.5717 15.5137 13.9998C15.5137 16.4279 17.482 18.3962 19.9101 18.3962H31.0384V9.60334Z"
                  fill="#4CBFFF"
                />
                <circle cx="19.7627" cy="13.9998" r="2.19822" fill="white" />
              </svg>
            </span>
            Kobodrop
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#learn">Learn</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </nav>
        </div>

        <button className="bg-[#0A2540] text-white px-4 py-2 rounded">
          Install Kobodrop
        </button>
      </header>
    </>
  );
}

export default Nav;
