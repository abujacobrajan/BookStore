import React, { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://bookstore-u9gq.onrender.com/books/")
      .then((response) => {
        if (response.data) {
          setBooks(response.data);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch books. Please try again later.");
        setBooks([]);
      });
  }, []);

  return (
    <div style={{ height: "100vh" }} className="container text-bg-info">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h1>Your Book List</h1>
        <Link to="/books/create" style={{ color: '#018932', cursor: 'pointer' }} >
            <MdOutlineAddBox size={40} />
        </Link>
        
      </div>
      <div>
        {/* <table className="table table-bordered grid text-center"> */}
        <table className="table table-bordered">
          <thead className="grid text-center">
            <tr className="bg-success text-white">
              <th className="text-center border border-info border-3 rounded-3">
                No.
              </th>
              <th className="text-center border border-info border-3 rounded-3">
                Title
              </th>
              <th className="text-center border border-info border-3 rounded-3">
                Author
              </th>
              <th className="text-center border border-info border-3 rounded-3">
                Published Year
              </th>
              <th className="text-center border border-info border-3 rounded-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr
                key={item.id || index}
                className={`${index % 2 === 0 ? "bg-light" : ""}`}
              >
                <td className="text-center border border-info border-3 rounded-3">
                  {index + 1}
                </td>
                <td className="text-center border border-info border-3 rounded-3">
                  {item.title}
                </td>
                <td className="text-center border border-info border-3 rounded-3">
                  {item.author}
                </td>
                <td className="text-center border border-info border-3 rounded-3">
                  {item.publishYear}
                </td>
                <td className="text-center border border-info border-3 rounded-3">
                  <div className = "d-flex justify-content-evenly align-items-center">
                  <Link to={`/books/details/${item._id}`} aria-label="View Details">
                    <BsInfoCircle />
                  </Link>
                  <Link to={`/books/edit/${item._id}`} aria-label="Edit Book">
                    <FaRegEdit />
                  </Link>
                  <Link to={`/books/delete/${item._id}`}>
                    <MdDelete aria-label="Delete Book" style={{ color: 'red', cursor: 'pointer' }} />
                  </Link>
                  </div>
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
