import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contex/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";

export default function TaskDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { theme } = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  return (
    <View style={[themeStyles.addcontainer, styles.container]}>
      {/* Botón de volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      {/* Detalles del anuncio */}
      <Text style={[themeStyles.text, styles.title]}>{params.anuncio}</Text>
      <Text style={[themeStyles.text, styles.detail]}>
        <Text style={styles.bold}>Persona:</Text> {params.persona}
      </Text>
      <Text style={[themeStyles.text, styles.detail]}>
        <Text style={styles.bold}>Motivo:</Text> {params.motivo}
      </Text>
      <Text style={[themeStyles.text, styles.detail]}>
        <Text style={styles.bold}>DNI:</Text> {params.dni}
      </Text>
      <Text style={[themeStyles.text, styles.detail]}>
        <Text style={styles.bold}>Vehículo:</Text> {params.vehiculo}
      </Text>

      {/* Mostrar imagen si existe */}
      {params.imagen && <Image source={{ uri: params.imagen }} style={styles.image} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
