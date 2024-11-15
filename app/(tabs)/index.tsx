import { View, FlatList, StyleSheet, Text } from "react-native";
import RecipeCard from "@/components/RecipeCard";
import { useRecipesContext } from "@/context/RecipesContext";

const index = () => {
  const recipesContext = useRecipesContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recettes</Text>
      <FlatList
        horizontal
        data={recipesContext.recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.title}>Un peu d'histoire</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "#a47a4b",
    marginLeft: 20,
  },
});

export default index;
