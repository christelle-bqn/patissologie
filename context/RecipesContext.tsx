import { Recipe, RECIPES } from "@/data/recipes";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  recipes: [],
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
    const loadRecipes = async () => {
      try {
        const storedRecipes = await AsyncStorage.getItem("recipes");
        if (storedRecipes) {
          setRecipes(JSON.parse(storedRecipes));
        } else {
          await AsyncStorage.setItem("recipes", JSON.stringify(RECIPES));
          setRecipes(RECIPES);
        }
      } catch (e) {
        console.error("Failed to load recipes from AsyncStorage", e);
      }
    };

    loadRecipes();
  }, []);

  // const clearAllData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log("All data cleared from AsyncStorage");
  //   } catch (e) {
  //     console.error("Failed to clear AsyncStorage", e);
  //   }
  // };

  // useEffect(() => {
  //   clearAllData();
  // }, []);

  useEffect(() => {
    const loadMemories = async () => {
      try {
        const storedMemories = await AsyncStorage.getItem("memories");
        if (storedMemories) {
          setMemories(JSON.parse(storedMemories));
        }
      } catch (e) {
        console.error("Failed to load memories from AsyncStorage", e);
      }
    };

    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavoritesRecipes(JSON.parse(storedFavorites));
        }
      } catch (e) {
        console.error("Failed to load favorites from AsyncStorage", e);
      }
    };

    loadMemories();
    loadFavorites();
  }, []);

  const modifyFavoritesRecipes = async (recipe: Recipe) => {
    const isFavorite = favoritesRecipes.some(
      (favRecipe) => favRecipe.id === recipe.id
    );

    const updatedRecipes = recipes.map((r) =>
      r.id === recipe.id ? { ...r, bookmarked: !isFavorite } : r
    );
    setRecipes(updatedRecipes);
    await AsyncStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    const updatedFavorites = isFavorite
      ? favoritesRecipes.filter((favRecipe) => favRecipe.id !== recipe.id)
      : [...favoritesRecipes, { ...recipe, bookmarked: true }];

    setFavoritesRecipes(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    console.log("Favorites updated and saved to AsyncStorage");
  };

  const addMemory = async (memory: Memory) => {
    const updatedMemories = [...memories, memory];
    setMemories(updatedMemories);

    try {
      await AsyncStorage.setItem("memories", JSON.stringify(updatedMemories));
      console.log("Memory added and saved to AsyncStorage");
    } catch (e) {
      console.error("Failed to save memory to AsyncStorage", e);
    }
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
