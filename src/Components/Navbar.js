import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import magginewsLogo from "./ImageFolder/MaggiNews.png"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-black z-20D absolute w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center flex-shrink-0">
                <img
                  className="h-16 w-16 rounded-full"
                  src={magginewsLogo}
                  alt="MAggiNews"
                />
                <p className=" font-Exo py-2 text-2xl text-yellow font-medium">
                    MaggiNews
                  </p>
              </div>
              <div className="hidden md:block">
                <div className="ml-2 flex items-center space-x-4">
                  <Link to="/" className=" font-Geo text-white pl-5 py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Home
                  </Link>
                  <Link to="/general" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    General
                  </Link>
                  <Link to="/entertainment" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Entertainment
                  </Link>
                  <Link to="/business" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Business
                  </Link>
                  <Link to="/health" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Health
                  </Link>
                  <Link to="/science" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Science
                  </Link>
                  <Link to="/sports" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Sports
                  </Link>
                  <Link to="/technology" className=" font-Geo text-white py-2 hover:opacity-100 opacity-75 text-xl font-medium">
                    Technology
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 opacity-75 hover:opacity-95 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 pl-3">
                <Link to="/home" className="text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium" >
                  Home
                </Link>
                <Link to="/general" className="text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium" >
                  General
                </Link>
                <Link to="/entertainment" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Entertainment
                  </Link>
                  <Link to="/business" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Business
                  </Link>
                  <a to="/health" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Health
                  </a>
                  <a to="/science" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Science
                  </a>
                  <a to="/sports" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Sports
                  </a>
                  <a to="/technology" className=" text-white font-Geo hover:opacity-100 text-xl opacity-75 block px-3 py-2 rounded-md font-medium">
                    Technology
                  </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;