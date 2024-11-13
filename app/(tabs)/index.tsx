import { View, FlatList, StyleSheet } from "react-native";
import RecipeCard from "../../components/ui/RecipeCard";
import { RECIPES } from "../../data/recipes";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            time={item.time}
            difficulty={item.difficulty}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
