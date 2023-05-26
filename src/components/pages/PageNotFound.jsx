import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="container mx-auto text-center w-full md:w-1/2 mx-auto">
        <img src="./assets/images/404.png" alt="Page Not Found" />
        <Link className="btn btn-primary mt-10" to="/">
          Return To Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
