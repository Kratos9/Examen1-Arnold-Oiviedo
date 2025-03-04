import { useTask } from "@/contex/TaskContex";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker"; // 📸 Importar el selector de imágenes
import { useTheme } from "@/contex/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";

export default function SettingsScreen() {
  const { addTask } = useTask();
  const router = useRouter();
  const {theme} = useTheme();
        const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  // Estado del dropdown
  const [open, setOpen] = useState(false);
  const [anuncio, setAnuncio] = useState(null);
  const [items, setItems] = useState([
    { label: "Visitas", value: "Visitas" },
    { label: "Proveedores", value: "Proveedores" },
    { label: "Entrevistas", value: "Entrevistas" },
  ]);

  const [persona, setPersona] = useState("");
  const [motivo, setMotivo] = useState("");
  const [dni, setDni] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [imagen, setImagen] = useState<string | null>(null); // 📸 Estado para la imagen

  // 📸 Función para seleccionar una imagen
  const seleccionarImagen = async () => {
    let permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert("Permiso requerido", "Necesitas otorgar acceso a la galería.");
      return;
    }

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri); // 📸 Guarda la imagen seleccionada
    }
  };
   // 📷 Función para tomar una foto con la cámara
   const tomarFoto = async () => {
    let permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert("Permiso requerido", "Necesitas otorgar acceso a la cámara.");
      return;
    }

    let resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri); // 📸 Guardar la foto tomada
    }
  };

  const handleAddTask = () => {
    if (anuncio && persona && motivo && dni && vehiculo) {
      const newTask = {
        id: Date.now(),
        anuncio,
        persona,
        motivo,
        dni,
        vehiculo,
        imagen, // 📸 Guardar la imagen en la tarea
      };
      addTask(newTask);

      Alert.alert(
        "Éxito",
        "Anuncio creado exitosamente ✅",
        [{ text: "OK", onPress: () => router.replace("/inicio") }]
      );

      // Limpiar los campos
      setAnuncio(null);
      setPersona("");
      setMotivo("");
      setDni("");
      setVehiculo("");
      setImagen(null);
    } else {
      Alert.alert("Error", "Por favor, complete todos los campos.");
    }
  };

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
    <View style={[themeStyles.addcontainer,styles.container]}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/home")}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      <Text style={[themeStyles.title,styles.header]}>
        Gestionar Anuncio{" "}
        <Image source={require("../../assets/images/añadirtarea.png")} style={styles.logo} />
      </Text>

      {/* Dropdown de Tipo de Anuncio */}
      <View style={[styles.dropdownContainer]}>
        <Text style={[themeStyles.text,styles.label]}>Tipo de Anuncio:</Text>
        <DropDownPicker
          open={open}
          value={anuncio}
          items={items}
          setOpen={setOpen}
          setValue={setAnuncio}
          setItems={setItems}
          placeholder="Selecciona un tipo de anuncio"
          style={[themeStyles.dropdown]}
          dropDownContainerStyle={[themeStyles.dropdownList]}
        />
      </View>

      <TextInput
        style={[themeStyles.text,styles.input]}
        placeholder="Nombre de la persona"
        placeholderTextColor="#888"
        value={persona}
        onChangeText={setPersona}
      />
      <TextInput
        style={[themeStyles.text,styles.input]}
        placeholder="Motivo de la visita"
        placeholderTextColor="#888"
        value={motivo}
        onChangeText={setMotivo}
      />
      <TextInput
        style={[themeStyles.text,styles.input]}
        placeholder="Identidad (DNI)"
        placeholderTextColor="#888"
        value={dni}
        onChangeText={setDni}
        keyboardType="numeric"
      />
      <TextInput
        style={[themeStyles.text,styles.input]}
        placeholder="Tipo de vehículo"
        placeholderTextColor="#888"
        value={vehiculo}
        onChangeText={setVehiculo}
      />

      {/* 📸 Botón para seleccionar imagen */}
      <TouchableOpacity style={styles.imageButton} onPress={seleccionarImagen}>
        <Ionicons name="image-outline" size={24} color="white" />
        <Text style={styles.imageButtonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>

         {/* 📷 Botón para tomar foto */}
         <TouchableOpacity style={styles.cameraButton} onPress={tomarFoto}>
        <Ionicons name="camera-outline" size={24} color="white" />
        <Text style={styles.imageButtonText}>Tomar Foto</Text>
      </TouchableOpacity>


      {/* 📸 Mostrar imagen seleccionada */}
      {imagen && <Image source={{ uri: imagen }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="checkmark-outline" size={24} color="white" />
        <Text style={styles.addButtonText}>Añadir Anuncio</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  dropdownContainer: {
    marginBottom: 20,
    zIndex: 1000, // Asegura que el dropdown no se superponga mal con otros elementos
  },
  dropdown: {
    backgroundColor: "#F5F5F5",
    borderColor: "#ccc",
    borderRadius: 10,
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign:'left'
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
    
  },
  imageButton: {
    flexDirection: "row",
    backgroundColor: "#FF7F50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  imageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "25%",
  },
  backButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  logo: {
    width: 40,
    height: 40,
  },
  cameraButton: {
    flexDirection: "row",
    backgroundColor: "#32CD32",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});
