import React, { useState, useEffect } from "react";
import Bookitem from "./Bookitem";
import * as getBooks from "@/axios/getBooks";
import Modal from "./Modal";

const Main = () => {
  const [bookData, setBookData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setselectedBook] = useState(null);

  const handleShowModal = (book) => {
    setShowModal(!showModal);
    setselectedBook(book);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await getBooks.getBooks("react");
      setBookData(result);
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-primary pb-10">
      <div className="w-full h-2 bg-gradient-to-b from-white via-primary to-primary"></div>
      <div className="w-3/5 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bookData.map((book, index) => (
          <Bookitem book={book} handleShowModal={handleShowModal} key={index} />
        ))}
      </div>
      {showModal && (
        <Modal
          selectedBook={selectedBook}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Main;
