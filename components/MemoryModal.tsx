import { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImagePickerComponent from "@/components/ImagePicker";
import { useRecipesContext } from "@/context/RecipesContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface MemoryModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const MemoryModal: FC<MemoryModalProps> = ({ showModal, setShowModal }) => {
  const recipesContext = useRecipesContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<string>(
    new Date(Date.now()).toLocaleString("fr-FR")
  );
  const [image, setImage] = useState<string | null>(null);

  const handleSave = () => {
    if (!title || !description || !date || !image) {
      return;
    }

    Keyboard.dismiss();
    recipesContext.addMemory({
      id: `memory-${recipesContext.memories.length + 1}`,
      title,
      description,
      date,
      image,
    });
    setShowModal(false);
  };

  return (
    <Modal
      visible={showModal}
      animationType="slide"
      onDismiss={() => setShowModal(false)}
      transparent
    >
      <View style={styles.modalContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Pressable
              onPress={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <MaterialIcons name="close" color="#fff" size={20} />
            </Pressable>
          </View>

          <View>
            {image ? (
              <Image
                source={image ? { uri: image } : undefined}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 10,
                  marginBottom: 20,
                  borderColor: "#a47a4b",
                  borderWidth: 1,
                  backgroundColor: "#f1f1f1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="image-outline" color="#a47a4b" size={50} />
              </View>
            )}
          </View>

          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder={"Titre"}
            style={styles.input}
            placeholderTextColor={"#f1f1f1"}
          />

          {Platform.OS === "ios" ? (
            <>
              <TextInput
                scrollEnabled={false}
                style={{ ...styles.input }}
                placeholder={"Description"}
                placeholderTextColor={"#f1f1f1"}
                onChangeText={(text) => setDescription(text)}
                value={description}
                multiline
                maxLength={300}
              />
            </>
          ) : (
            <>
              <TextInput
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder={"Description"}
                style={styles.input}
                placeholderTextColor={"#f1f1f1"}
                multiline
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                maxLength={300}
              />
            </>
          )}
          <ImagePickerComponent setImage={setImage} image={image} />

          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    marginBottom: 10,
  },
  closeButton: {
    height: 30,
    width: 30,
    backgroundColor: "#a47a4b",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  plusButton: {
    marginTop: 10,
  },
  modalContainer: {
    backgroundColor: "#a47a4b",
    padding: 20,
    marginTop: Platform.OS === "android" ? 20 : 0,
    height: "90%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
    gap: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    color: "#fff",
    borderRadius: 10,
    fontSize: 14,
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: "#a47a4b",
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default MemoryModal;
