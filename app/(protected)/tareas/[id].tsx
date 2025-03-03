import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Botón de volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      {/* Detalles del anuncio */}
      <Text style={styles.title}>{params.anuncio}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Persona:</Text> {params.persona}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Motivo:</Text> {params.motivo}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>DNI:</Text> {params.dni}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Vehículo:</Text> {params.vehiculo}</Text>
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
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
    color: "#2D2E32",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});


