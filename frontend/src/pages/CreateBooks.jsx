/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      alert("Please fill in all fields.");
      return;
    }
    const data = {
      title,
      author,
      publishYear: Number(publishYear),
    };
    setLoading(true);
    axios
      .post("https://bookstore-u9gq.onrender.com/books/", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend , please check console");
        console.log(error);
      });
  };
  return (
    <div className="container p-4">
      <BackButton />
      <h1 className="display-4 my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="border border-primary rounded p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};
export default CreateBooks;
