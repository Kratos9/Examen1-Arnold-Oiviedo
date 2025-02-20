
import TaskCard from "@/components/TaskCard";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


export default function TaskScreen(){
    const router = useRouter();
    const {id, titulo, descripcion} = useLocalSearchParams ();

    return (
        <View style={styles.container}>
          <TaskCard titulo={titulo as string} descripcion={descripcion as string} />
    
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
            <Text style={styles.backButtonText}>Volver a Tareas</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F5F7FA",
      },
      backButton: {
        flexDirection: "row",
        backgroundColor: "#4A90E2",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      },
      backButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
      },
    });