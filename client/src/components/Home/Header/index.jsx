import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "@/assets/images/background-top.png";
import Logo from "@/assets/images/logo.png";

const Header = () => {
  const [term, setTerm] = useState("");

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <header className="w-full h-20 flex relative">
      <img
        className="w-1/4 brightness-75 object-cover"
        src={background}
        alt=""
      />
      <div className="w-3/4 bg-primary flex items-center gap-2">
        <form className="ml-32 w-1/3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="inputSearch"
              placeholder="Search books..."
              value={term}
              onChange={handleInputChange}
            />
            <button type="button" className="btnSearch">
              Search
            </button>
          </div>
        </form>
        <Link
          to="/login"
          className="bg-white py-2 px-5 rounded text-lg hover:bg-second hover:text-white transition duration-200 ease-linear"
        >
          Login
        </Link>
      </div>
      <div className="absolute h-full -bottom-5 right-1/4">
        <img className="w-full h-full object-cover" src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
