
import { useAuth } from "@/contex/AuthContex";
import { Ionicons } from "@expo/vector-icons";
import {  useRouter } from "expo-router";
import { useState,  } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native"


export default function LoginScreen(){
    const [email, setEmail] = useState ('')
    const router = useRouter ();
    const {login} = useAuth();


    return (
       <View style= {styles.outerContainer}>
         <View style={styles.innerContainer}>
         < Image 
         source={require ("../assets/images/login.jpg")}
         style={styles.logo}
         />
            <Text style={styles.buttonText}>Usuario actual {email || 'Ninguno'}</Text>
            <Text style={styles.buttonText}>Iniciar seseion</Text>

          

            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TouchableOpacity style={styles.button} onPress={()=> {login(email); router.replace('/home')}}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          
        
        </View>
       </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'hsla(0, 0.00%, 98.80%, 0.84)',
    },
    innerContainer: {
      width: '90%',
      maxWidth: 350,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.84)', // Fondo blanco del formulario
      borderRadius: 15,
      color:'#fff',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5, // Para sombra en dispositivos Android
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 40,
      alignSelf: 'center',
      
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 10,
      fontSize: 16,
      color:'#333',
    },
    button: {
      width: '100%',
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#333',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',  
    },
    registerText: {
      marginTop: 20,
      color: '#007BFF',
      fontSize: 16,
      textAlign: 'center',
    },
  });