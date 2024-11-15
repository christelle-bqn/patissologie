import { Memory } from "@/context/RecipesContext";

import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type MemoryProps = {
  memory: Memory;
};

const MemoryCard: FC<MemoryProps> = ({ memory }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: memory.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{memory.title}</Text>
        <Text style={styles.description}>{memory.description}</Text>
        <Text style={styles.date}>{memory.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
});

export default MemoryCard;
