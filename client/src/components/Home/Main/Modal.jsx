import React from "react";
import book from "@/assets/images/book.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ selectedBook, handleCloseModal }) => {
  const {
    volumeInfo: {
      title,
      imageLinks: { thumbnail },
      authors,
      publishedDate,
      description,
    },
  } = selectedBook;

  return (
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
            <button className="bg-blue-400 text-white py-1 px-7 rounded-md">
              More
            </button>
          </div>
        </div>
        <div className="mt-6 max-h-64 overflow-auto text-justify p-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Modal;
