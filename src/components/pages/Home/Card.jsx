import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const { _id, chef_name, chef_image, experience, likes, number_of_recipes } =
    chef;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex-1">
      <figure className="lg:w-1/2">
        <LazyLoadImage
          src={
            chef_image ? chef_image : "/assets/images/default-profile-img.jpg"
          }
          alt={chef_name}
          className="object-cover h-90 md:h-64 w-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-center lg:w-1/2">
        <h2 className="card-title">{chef_name}</h2>
        <ul>
          <li>{experience} of experience</li>
          <li>Number Of Recipes: {number_of_recipes}</li>
          <li>Like: {likes}</li>
        </ul>
        <div className="card-actions justify-start">
          <Link to={"/chef/" + _id} className="btn btn-primary">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
