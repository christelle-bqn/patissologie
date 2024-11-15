import { useRecipesContext } from "@/context/RecipesContext";
import { Recipe } from "@/data/recipes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: FC<RecipeCardProps> = (props) => {
  const recipe = props.recipe;

  const recipesContext = useRecipesContext();

  const handleBookmark = () => {
    recipesContext.modifyFavoritesRecipes({
      ...recipe,
      bookmarked: !recipe.bookmarked,
    });
  };

  return (
    <View style={styles.card}>
      <Link
        push
        href={{
          pathname: "/recipe/[id]",
          params: { id: recipe.id },
        }}
      >
        <Image
          source={recipe.image as ImageSourcePropType}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
            <TouchableOpacity
              onPress={handleBookmark}
              activeOpacity={1}
              hitSlop={20}
            >
              <Ionicons
                name={recipe.bookmarked ? "bookmark" : "bookmark-outline"}
                color="#a47a4b"
                size={22}
                style={styles.bookmarkButton}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.details}>
            {recipe.time.total} • {recipe.difficulty}
          </Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
    height: 280,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 12,
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  bookmarkButton: {
    marginLeft: 8,
  },
  details: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
});

export default RecipeCard;
