// src/pages/CookingStepsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export const CookingStepsPage = ({ recipes = [] }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe || !recipe.steps) return <p>No steps available.</p>;

  return (
    <div className="cooking-page">
      <h1 className="cooking-title">Cooking Steps</h1>

      <div className="cooking-steps-wrapper">
        {recipe.steps.map((step, index) => (
          <div key={index} className="cooking-step">
            <h3>
              <strong>Step {index + 1}:</strong> {step.title}
            </h3>
            <ul className="cooking-step-list">
              {step.instructions.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
