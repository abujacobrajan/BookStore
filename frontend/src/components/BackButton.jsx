import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({ destination = "/" }) {
  console.log("Rendering BackButton");
  return (
    <div className="d-flex">
      <Link
        to={destination}
        className="btn btn-primary text-white px-4 rounded"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}

export default BackButton;
