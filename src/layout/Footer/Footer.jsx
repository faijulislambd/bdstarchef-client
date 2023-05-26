import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-50 mt-20">
      <div className="flex-col justify-center sm:flex-row py-10 text-xl sm:text-2xl text-center">
        All Rights Reserved &copy;2023 ||{" "}
        <span className="font-bold sm:ms-1">BDSTARCHEFS</span>
      </div>
    </footer>
  );
};

export default Footer;
