import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { addToCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";

const Modal = ({ selectedBook, handleCloseModal }) => {
  const dispatch = useDispatch();
  const store = useStore();
  const {
    volumeInfo: {
      title,
      imageLinks: { thumbnail },
      authors,
      publishedDate,
      description,
    },
  } = selectedBook;

  const handleAddToCart = (book) => {
    dispatch(addToCart({ book, quantity: 1 }));
    persistStore(store).flush();
  };
  useEffect(() => {
    persistStore(store).flush();
  }, [store]);

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-2/4 bg-white px-5 py-10 flex flex-col items-center relative">
          <AiOutlineClose
            className="absolute right-1 top-1 text-xl cursor-pointer"
            onClick={handleCloseModal}
          />
          <div className="flex w-3/4 gap-5">
            <img
              className="w-ful h-full object-cover"
              src={thumbnail}
              alt={title}
            />
            <div className="w-3/4">
              <h2 className="font-bold mb-2">{title}</h2>
              <p className="text-green-700 font-semibold text-lg mb-2">
                {authors}
              </p>
              <p className="text-blue-600 font-medium text-base mb-2">
                {publishedDate}
              </p>
              <div className="flex gap-3">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                  More
                </button>
                <button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  onClick={() => handleAddToCart(selectedBook)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 max-h-64 overflow-auto text-justify p-2">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
