
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="display-4 my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div
        className="d-flex flex-column align-items-center border border-primary rounded p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h3 className="display-6">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="btn btn-danger mt-4 w-100"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
export default DeleteBook;
