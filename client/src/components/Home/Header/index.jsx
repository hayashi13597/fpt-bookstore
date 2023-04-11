import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "@/assets/images/background-top.png";
import Logo from "@/assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { searchSlice } from "./searchSlice";
import { FaShoppingCart } from "react-icons/fa";
import { persistStore } from "redux-persist";
import { useStore } from "react-redux";

const Header = () => {
  const [term, setTerm] = useState("");
  const naviggate = useNavigate();
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    persistStore(store).flush();
  }, [store]);
  const cartItems = useSelector((state) => state.cart.cart);

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    dispatch(searchSlice.actions.SEARCH(term));
    setTerm("");
  };

  return (
    <header className="w-full h-20 flex relative">
      <Link
        to="/"
        className="absolute text-white z-50 font-bold text-4xl top-1/2 -translate-y-1/2 bg-gray-800"
      >
        FPT BOOKSTORE
      </Link>
      <img
        className="w-1/4 brightness-75 object-cover"
        src={background}
        alt=""
      />
      <div className="w-3/4 bg-primaryBg flex items-center gap-2">
        <form className="ml-16 w-1/3" onSubmit={handleSearchButtonClick}>
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
              required
            />
            <button type="submit" className="btnSearch">
              Search
            </button>
          </div>
        </form>
        {localStorage.getItem("token") ? (
          <Link
            to="/logout"
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("token");
              naviggate("/");
            }}
            className="bg-white py-2 px-5 rounded text-lg hover:bg-secondBg hover:text-white transition duration-200 ease-linear"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-white py-2 px-5 rounded text-lg hover:bg-secondBg hover:text-white transition duration-200 ease-linear"
          >
            Login
          </Link>
        )}
        <Link
          to="/cart"
          className="bg-white p-3 rounded-sm cursor-pointer relative"
        >
          <span className="bg-red-500 text-xs text-white absolute -top-1 -right-1 p-1 w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems && cartItems.length}
          </span>
          <FaShoppingCart />
        </Link>
      </div>
      <div className="absolute h-full -bottom-5 right-1/4">
        <img className="w-full h-full object-cover" src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
