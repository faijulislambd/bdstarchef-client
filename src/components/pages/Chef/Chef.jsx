import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "./ChefBanner";
import Recipes from "./Recipes";

const Chef = () => {
  const chef = useLoaderData();
  const {
    _id,
    chef_name,
    chef_image,
    chef_bio,
    experience,
    likes,
    number_of_recipes,
    recipes,
  } = chef;
  return (
    <div className="container mx-auto py-10">
      <ChefBanner
        key={_id}
        name={chef_name}
        bio={chef_bio}
        image={chef_image}
        experience={experience}
        likes={likes}
        number_of_recipes={number_of_recipes}
      ></ChefBanner>
      <div className="py-10">
        <h2 className="mb-10 text-3xl font-bold text-center">
          Top 3 Recipes Of {chef_name}
        </h2>
        <div className="divider"></div>
        <div className="grid lg:grid-cols-3 gap-4 pt-5">
          {recipes.map((recipe) => (
            <Recipes key={recipe.recipe_id} recipe={recipe} id={_id}></Recipes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
