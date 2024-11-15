import { View, FlatList, StyleSheet } from "react-native";
import RecipeCard from "@/components/RecipeCard";
import { useRecipesContext } from "@/context/RecipesContext";

const favorites = () => {
  const recipesContext = useRecipesContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={recipesContext.favoritesRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "#a47a4b",
    marginLeft: 20,
  },
});

export default favorites;
