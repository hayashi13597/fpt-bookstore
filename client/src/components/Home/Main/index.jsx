import React, { useState, useEffect } from "react";
import Bookitem from "./Bookitem";
import * as getBooks from "@/axios/getBooks";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { searchCreateSelector } from "@/redux/selectors";
import { UPDATE } from "../Header/searchSlice";
import Loading from "../../Loading";

const Main = () => {
  const [bookData, setBookData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setselectedBook] = useState(null);
  const dispatch = useDispatch();

  const term = useSelector(searchCreateSelector);
  const loading = useSelector((state) => state.search.loading);

  const handleShowModal = (book) => {
    setShowModal(!showModal);
    setselectedBook(book);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await getBooks.getBooks(term);
      dispatch(UPDATE());
      setBookData(result);
    };
    fetchBooks();
  }, [term]);

  return (
    <div className="bg-primaryBg pb-10">
      <div className="w-full h-2 bg-gradient-to-b from-white via-primaryBg to-primaryBg"></div>
      <div className="w-3/5 mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading ? (
          <Loading />
        ) : (
          bookData.map((book, index) => (
            <Bookitem
              book={book}
              handleShowModal={handleShowModal}
              key={index}
            />
          ))
        )}
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
