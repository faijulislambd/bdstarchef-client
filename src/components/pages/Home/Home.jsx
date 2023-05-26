import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Counter from "./Counter";
import Subscribe from "./Subscribe";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="py-10">
        <Banner></Banner>
      </div>
      <div className="py-10">
        <Chefs chefs={chefs}></Chefs>
      </div>
      <div className="py-10">
        <Counter></Counter>
      </div>
      <div className="py-10">
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
