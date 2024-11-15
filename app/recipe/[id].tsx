import { useRecipesContext } from "@/context/RecipesContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const RecipeDetail: FC = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const recipesContext = useRecipesContext();

  const recipe = recipesContext.recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return null;
  }

  const handleBookmark = () => {
    recipesContext.modifyFavoritesRecipes({
      ...recipe,
      bookmarked: !recipe.bookmarked,
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
              activeOpacity={1}
              hitSlop={20}
            >
              <Ionicons
                name="arrow-back-outline"
                color="#a47a4b"
                size={32}
                style={styles.backButton}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleBookmark}
              style={styles.backButton}
              activeOpacity={1}
              hitSlop={20}
            >
              <Ionicons
                name={recipe.bookmarked ? "bookmark" : "bookmark-outline"}
                color="#a47a4b"
                size={32}
                style={styles.backButton}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={recipe.image as ImageSourcePropType}
            style={styles.image}
            resizeMode="cover"
            accessibilityLabel={recipe.title}
          />

          <View style={styles.infos}>
            <Text style={styles.title}>{recipe.title}</Text>

            <Text style={styles.description}>{recipe.description}</Text>

            <Text style={styles.sectionTitle}>
              Difficulté : {recipe.difficulty}
            </Text>

            <View style={styles.separator} />

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.sectionTitle}>Cuisson</Text>
                <Text style={styles.time}> {recipe.time.total}</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.sectionTitle}>Préparation</Text>
                <Text style={styles.time}> {recipe.time.preparation}</Text>
              </View>

              {recipe.time.rest && (
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text style={styles.sectionTitle}>Repos</Text>
                  <Text style={styles.time}> {recipe.time.rest}</Text>
                </View>
              )}
            </View>

            <View style={styles.separator} />

            <Text style={styles.sectionTitle}>Ingrédients</Text>
            {recipe.ingredients.map((section, index) => (
              <View key={index}>
                <Text style={styles.category}>{section.category}</Text>
                {section.items.map((item, index) => (
                  <Text key={index} style={styles.item}>
                    {item}
                  </Text>
                ))}
              </View>
            ))}

            <View style={styles.separator} />

            <Text style={styles.sectionTitle}>Instructions</Text>
            {recipe.steps.map((step, index) => (
              <Text key={index} style={styles.step}>
                <View style={{ marginBottom: 10 }}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                </View>

                <View style={styles.instructions}>
                  {step.instructions.map((item, index) => (
                    <Text key={index} style={{ ...styles.item }}>
                      {item}
                    </Text>
                  ))}
                </View>
              </Text>
            ))}

            <View style={styles.separator} />

            {recipe.tips && (
              <>
                <Text style={styles.sectionTitle}>Conseils</Text>
                <View style={styles.tipsList}>
                  {recipe.tips.map((value, index) => (
                    <Text key={index}>• {value}</Text>
                  ))}
                </View>
              </>
            )}

            {recipe.storage && (
              <>
                <Text style={styles.sectionTitle}>Conservation</Text>
                <View style={styles.tipsList}>
                  {recipe.storage.map((value, index) => (
                    <Text key={index}>• {value}</Text>
                  ))}
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopColor: "#E2E2E2",
    borderTopWidth: 1,
    marginVertical: 10,
  },
  separatorDark: {
    borderTopColor: "#CECECE",
    borderTopWidth: 1,
    marginVertical: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  backButton: {
    backgroundColor: "transparent",
  },
  container: {
    //padding: 10,
    //paddingHorizontal: 15,
  },
  contentContainer: {
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "gray",
    marginBottom: 10,
  },
  infos: {
    paddingVertical: 10,
    flexDirection: "column",
    gap: 10,
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255,255,255, 10)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: -15,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  category: {
    fontWeight: "bold",
    marginTop: 10,
  },
  item: {
    marginLeft: 10,
  },
  step: {
    marginVertical: 5,
    display: "flex",
    flexDirection: "column",
  },
  stepTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  tipsList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  tips: {
    marginVertical: 5,
  },
  time: {
    fontWeight: "bold",
    color: "#a47a4b",
  },
  instructions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export default RecipeDetail;
