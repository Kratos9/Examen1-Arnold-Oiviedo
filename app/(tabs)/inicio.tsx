import { useTheme } from "@/contex/ThemeContext";
import { RootSate } from "@/store/store";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Inicio() {
  const anuncios = useSelector((state: RootSate) => state.anuncios.items);
  const router = useRouter();
  const { theme } = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  return (
    <View style={[themeStyles.addcontainer, styles.container]}>
      {/* Botón de volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="reader-outline" size={32} color="#4A90E2" />
        <Text style={[themeStyles.text, styles.title]}>Anuncios</Text>
      </View>

      {/* Mostrar mensaje si no hay anuncios */}
      {anuncios.length === 0 ? (
        <Text style={styles.noAnuncios}>No hay anuncios disponibles.</Text>
      ) : (
        <FlatList
          data={anuncios}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => router.push({ pathname: `/tareas/${item.id}`, params: item })}
            >
              <Text style={styles.anuncioText}>{item.anuncio || "Sin título"}</Text>
              <Text style={styles.detailsText}>Persona: {item.persona || "N/A"}</Text>
              <Text style={styles.detailsText}>Motivo: {item.motivo || "N/A"}</Text>
              <Text style={styles.detailsText}>DNI: {item.dni || "N/A"}</Text>
              <Text style={styles.detailsText}>Vehículo: {item.vehiculo || "N/A"}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: "#4A90E2",
  },
  anuncioText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    color: "#555",
  },
  noAnuncios: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});
