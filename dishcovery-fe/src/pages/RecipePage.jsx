// src/pages/RecipePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const RecipePage = ({ recipes = [] }) => {
    const { id } = useParams();
    const navigate = useNavigate();   // ← ADD THIS


    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        return (
            <div className="recipe-page">
                <p>Recipe not found.</p>
            </div>
        );
    }

    const renderBlockText = (value) => {
        if (Array.isArray(value)) return value.join('\n');
        return value || '';
    };

    return (
        <div className="recipe-page">
            {/* Title */}
            <h1 className="recipe-title">{recipe.title}</h1>

            {/* Main two-column layout */}
            <section className="recipe-main">
                {/* Left: Image */}
                <img
                    className="recipe-image"
                    src={recipe.imageUrl}
                    alt={recipe.title}
                />

                {/* Right: details */}
                <div className="recipe-details">
                    {/* Meta row (calories + time) */}
                    <div className="recipe-meta">
                        {recipe.calories != null && (
                            <span>Calories: {recipe.calories}</span>
                        )}
                        {recipe.time && <span>Time: {recipe.time}</span>}
                    </div>

                    {/* Nutrition + Ingredients columns */}
                    <div className="recipe-info-grid">
                        <div>
                            <h2>Nutrition</h2>
                            <pre className="nutrition-block">
                                {renderBlockText(recipe.nutrition)}
                            </pre>
                        </div>

                        <div>
                            <h2>Ingredients</h2>
                            <pre className="ingredient-block">
                                {renderBlockText(recipe.ingredients)}
                            </pre>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="recipe-buttons">
                        <button className="btn-dark" onClick={() => navigate(`/recipe/${id}/steps`)}>Cooking Steps</button>
                        <button
                            className="btn-dark"
                            onClick={() => navigate(`/recipe/${id}/guided`)}  // 👈 HERE
                        >
                            Guided Cooking
                        </button>
                    </div>


                </div>
            </section>
        </div>
    );
};
