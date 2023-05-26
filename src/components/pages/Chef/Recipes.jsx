import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Recipes = ({ recipe }) => {
  const { ingredients, instructions, recipe_name, id } = recipe;

  const [fav, setFav] = useState(false);

  const { user } = useContext(UserContext);

  const handleFavorite = (e) => {
    console.log(user.displayName);
    console.log(id);
    setFav(true);
    e.target.setAttribute("disabled", "disabled");
    toast.success("Favorite Added");
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-10 border hover:bg-base-300  transition">
      <div className="card-body">
        <h2 className="card-title">{recipe_name} </h2>
        <div className="divider"></div>
        <h3 className="mb-5 text-3xl font-bold">Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>;
          })}
        </ul>
        <div className="divider"></div>
        <h3 className="mb-5 text-3xl font-bold">Instruction:</h3>
        <p>{instructions}</p>
        <div className="py-10 text-center">
          <button
            className="btn btn-primary py-1 text-white"
            onClick={handleFavorite}
          >
            {!fav ? (
              <>
                <MdFavoriteBorder className="me-1" /> Add To Favorite
              </>
            ) : (
              <>
                <MdFavorite className="me-1" /> Added To Favorite
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
