import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
interface RecipeCardProps {
  title: string;
  time: string;
  difficulty: string;
  image: string;
}

export default function RecipeCard({
  title,
  time,
  difficulty,
  image,
}: RecipeCardProps) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.card}>
        <Image
          source={image as ImageSourcePropType}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>
            {time} • {difficulty}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  details: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
});
