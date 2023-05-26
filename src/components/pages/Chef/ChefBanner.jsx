import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefBanner = ({
  name,
  image,
  bio,
  likes,
  experience,
  number_of_recipes,
}) => {
  return (
    <div className="hero bg-base-200 rounded-lg py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <LazyLoadImage
          src={image ? image : "/assets/images/default-profile-img.jpg"}
          className="w-1/2 rounded-lg shadow-2xl"
        />

        <div className="w-1/ md:pe-10">
          <h1 className="text-5xl font-bold pe-80">{name} </h1>
          <p className="py-6">{bio}</p>
          <ul className="flex justify-between">
            <li>Likes: {likes}</li>
            <li>Experience: {experience}</li>
            <li>Recipes: {number_of_recipes}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
