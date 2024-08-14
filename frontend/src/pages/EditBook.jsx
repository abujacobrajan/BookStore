
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-u9gq.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      alert("Please fill in all fields.");
      return;
    }
    const data = {
      title,
      author,
      publishYear:Number(publishYear),
    };
    setLoading(true);
    axios
      .put(`https://bookstore-u9gq.onrender.com/books/${id}`, data)
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
      <h1 className="display-4 my-4 text-center">Edit Book</h1>
      {loading ? <Spinner /> : ''}
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

        <button className="btn btn-primary" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};
export default EditBook;
