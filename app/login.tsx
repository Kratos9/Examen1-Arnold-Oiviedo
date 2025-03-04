
import { useAuth } from "@/contex/AuthContex";
import { useTheme } from "@/contex/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Ionicons } from "@expo/vector-icons";
import {  useRouter } from "expo-router";
import { useState,  } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native"


export default function LoginScreen(){
    const [email, setEmail] = useState ('')
    const router = useRouter ();
    const {login} = useAuth();
      const {theme} = useTheme();
          const themeStyles = theme === "dark" ? darkTheme : lightTheme;


    return (
      <View style={[themeStyles.addcontainer, styles.outerContainer]}>

        <View style={[themeStyles.addcontainer, styles.innerContainer]}>
        <Text style={[themeStyles.title]}>PROTEGO SECURITY</Text>
        <Image 
          source={require("../assets/images/protego3.png")}
          style={styles.logo}
        />
        <Text style={[themeStyles.text, styles.buttonText]}>Usuario actual {email || 'Ninguno'}</Text>
        <Text style={[themeStyles.text, styles.buttonText]}>Iniciar Sesión</Text>
  
        <TextInput 
          style={[themeStyles.text, styles.input]} 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
        />
        <TouchableOpacity style={styles.button} onPress={() => { login(email); router.replace('/home') }}>
          <Text style={[themeStyles.text, styles.buttonText]}>Iniciar Sesión</Text>
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
      //backgroundColor: 'hsla(0, 0.00%, 98.80%, 0.84)',
    },
    innerContainer: {
   //   backgroundColor: 'rgba(255, 255, 255, 0.84)', // Fondo blanco del formulario
   width: '90%',
   maxWidth: 350,
   padding: 20,
   borderRadius: 15,
   shadowColor: '#000', 
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 10,
   elevation: 50,
    },
    headerContainer: {
      alignItems: 'center', 
      marginBottom: 20, 
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'center',
      
    },
    logo2: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'center', // Centra la imagen en su contenedor
      
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
      //color:'#333',
    },
    button: {
      width: '100%',
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      //color: '#333',
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