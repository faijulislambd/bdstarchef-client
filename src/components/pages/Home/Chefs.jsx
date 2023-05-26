import React from "react";
import Card from "./Card";

const Chefs = ({ chefs }) => {
  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold text-center">Our Chefs</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {chefs.map((chef) => {
          return <Card chef={chef} key={chef._id}></Card>;
        })}
      </div>
    </div>
  );
};

export default Chefs;
