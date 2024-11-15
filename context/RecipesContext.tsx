import { Recipe, RECIPES } from "@/data/recipes";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface RecipesContextType {
  recipes: Recipe[];
  favoritesRecipes: Recipe[];
  modifyFavoritesRecipes: (recipe: Recipe) => void;
  memories: Memory[];
  addMemory: (memory: Memory) => void;
}

const RecipesContext = createContext<RecipesContextType>({
  recipes: RECIPES,
  favoritesRecipes: [],
  modifyFavoritesRecipes: () => {},
  memories: [],
  addMemory: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const RecipesProvider = ({ children }: Props): React.ReactNode => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favoritesRecipes, setFavoritesRecipes] = useState<Recipe[]>([]);
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    setRecipes(RECIPES);
  }, []);

  const modifyFavoritesRecipes = (recipe: Recipe) => {
    const isFavorite = favoritesRecipes.some(
      (favRecipe) => favRecipe.id === recipe.id
    );

    if (isFavorite) {
      setFavoritesRecipes((prevFavorites) =>
        prevFavorites.filter((favRecipe) => favRecipe.id !== recipe.id)
      );
    } else {
      setFavoritesRecipes((prevFavorites) => [...prevFavorites, recipe]);
    }

    setRecipes((prevRecipes) =>
      prevRecipes.map((r) =>
        r.id === recipe.id ? { ...r, bookmarked: !r.bookmarked } : r
      )
    );
  };

  const addMemory = (memory: Memory) => {
    setMemories((prevMemories) => [...prevMemories, memory]);
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        favoritesRecipes,
        modifyFavoritesRecipes,
        memories,
        addMemory,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipesContext = () => {
  const context = useContext(RecipesContext);
  if (context === undefined) {
    throw new Error("useRecipesContext must be used within a RecipesProvider");
  }
  return context;
};
