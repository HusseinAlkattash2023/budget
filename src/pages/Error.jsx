import React from "react";

//library
import { ImHome } from "react-icons/im";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh! We've got a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={()=> navigate(-1)}>
          <HiArrowUturnLeft />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <ImHome />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
