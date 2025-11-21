import React from "react";
import { RecipePage } from "../pages/RecipePage";
import { MOCK_RECIPES } from "../mock/recipes"; // or wherever you defined them

export const RecipeContainer = () => {
  return <RecipePage recipes={MOCK_RECIPES} />;
};
