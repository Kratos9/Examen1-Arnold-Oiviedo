
import { useAuth } from "@/contex/AuthContex";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


export default function SettingsScreen(){
    
    const [titulo, setTitle] = useState('');
    const [description, setDescription] = useState('');   

    // Context para añadir tareas
  const { tasks, setTasks } = useAuth();
    const router = useRouter();

      // Función para manejar la creación de una nueva tarea
  const handleAddTask = () => {
    if (titulo && description) {
      const newTask = {
        id: tasks.length + 1,
        titulo,
        description,
      };

      // Actualizamos la lista de tareas
      setTasks([...tasks, newTask]);

      // Limpiamos los campos del formulario
      setTitle('');
      setDescription('');

      // Redirigimos a la pantalla de inicio
      router.replace('/inicio')
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };
  return (
    <View style={styles.container}>
       < Image 
               source={require ("../../assets/images/añadirtarea.png")}
               style={styles.logo}
               />
      <Text style={styles.header}>Añadir Tarea</Text>
      <TextInput
        style={styles.inputtitle} placeholder="Título de la tarea"placeholderTextColor='#888'
        
        value={titulo}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder ="Descripción de la tarea"placeholderTextColor='#888'
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.backButton} onPress={handleAddTask}>
            <Ionicons name="checkmark-outline" size={24} color="white" />
            <Text style={styles.backButtonText}>Añadir Tarea</Text>
          </TouchableOpacity>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputtitle: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
    color:'#000',
  
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
  logo: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 40,
    alignSelf: 'center',
    
  },
  input: {
    
      width: '100%',
      height: 80,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 10,
      fontSize: 16,
      color:'#000',
    
  },
});