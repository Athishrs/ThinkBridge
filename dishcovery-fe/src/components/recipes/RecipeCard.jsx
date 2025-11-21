import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RecipeCard = ({ id, title, calories, imageUrl }) => {


  console.log("RECIPEEE IDDD ---",id, title)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <article className="recipe-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="recipe-card-image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{title}</h3>
        {calories != null && (
          <p className="recipe-card-calories">Calories : {calories}</p>
        )}
      </div>
    </article>
  );
};
