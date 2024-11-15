import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ImagePickerProps = {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  image: string | null;
};

export default function ImagePickerComponent({
  setImage,
  image,
}: ImagePickerProps) {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled && !image) {
      alert("Vous devez selectionner une image pour enregistrer un souvenir");
    }

    if (result && !result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity onPress={pickImageAsync} style={styles.button}>
        <Ionicons
          name="images"
          color="#a47a4b"
          size={24}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.text}>Sélectionne une image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    color: "#a47a4b",
    fontSize: 14,
  },
});
