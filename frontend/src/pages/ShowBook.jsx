import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-u9gq.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container p-4">
      <BackButton />
      <h1 className="my-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border border-info rounded-3 p-4">
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Create Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="mb-4">
            <span className="fw-bold me-4 text-secondary">Last Update Time:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowBook;
