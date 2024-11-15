import { FC, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRecipesContext } from "@/context/RecipesContext";
import MemoryModal from "@/components/MemoryModal";
import MemoryCard from "@/components/MemoryCard";

const Pastries: FC = () => {
  const recipesContext = useRecipesContext();
  const [showModal, setShowModal] = useState(false);

  const handleAddMemory = () => {
    setShowModal(true);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        {recipesContext.memories.length === 0 ? (
          <View style={styles.emptyContainer}>
            {Array.from({ length: 6 }).map((_, i) => (
              <View key={i} style={styles.emptyCard} />
            ))}
          </View>
        ) : (
          <View style={styles.memoriesList}>
            {recipesContext.memories.map((recipe) => (
              <MemoryCard key={recipe.id} memory={recipe} />
            ))}
          </View>
        )}

        <MemoryModal showModal={showModal} setShowModal={setShowModal} />
      </KeyboardAwareScrollView>

      <TouchableOpacity onPress={handleAddMemory} style={styles.addButton}>
        <Ionicons
          name="add-circle-outline"
          color="#a47a4b"
          size={60}
          style={styles.addIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
  },
  emptyContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  emptyCard: {
    width: "90%",
    height: 170,
    backgroundColor: "rgba(164, 122, 75, 0.2)",
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  memoriesList: {
    paddingBottom: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: "40%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 6,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 1,
  },
  addIcon: {
    color: "#a47a4b",
  },
});

export default Pastries;
