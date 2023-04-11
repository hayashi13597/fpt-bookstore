import React from "react";

const Bookitem = ({ book, handleShowModal }) => {
  const {
    volumeInfo: {
      title,
      imageLinks: { thumbnail },
    },
    saleInfo: {
      listPrice: { amount },
    },
  } = book;
  return (
    <div
      className="flex flex-col p-3 bg-secondBg rounded-xl shadow-secondBg shadow-md"
      onClick={() => handleShowModal(book)}
    >
      <img
        className="w-full h-full object-cover rounded-xl"
        src={thumbnail}
        alt={title}
      />
      <div className="py-3 text-center font-bold line-clamp-2">{title}</div>
      <div className="py-1 my-2 bg-primaryBg text-center text-secondBg text-base">
        {amount ?? 20000}
      </div>
    </div>
  );
};

export default Bookitem;
