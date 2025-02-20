
import { useAuth } from "@/contex/AuthContex";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";


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
      <Text style={styles.header}>Añadir Tarea</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={titulo}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Añadir Tarea" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});