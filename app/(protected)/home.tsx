
import { useAuth } from "@/contex/AuthContex";
import { useTheme } from "@/contex/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from "react-native"


export default function HomeScreen(){
    const router = useRouter ();
    const {user, logout} = useAuth();
    const {theme} = useTheme();
    const themeStyles = theme === "dark" ? darkTheme : lightTheme;

    return (
        
        
        <View style={[themeStyles.addcontainer,styles.outerContainer]}>
         
            
         
            < Image 
         source={require ("../../assets/images/panel2.png")}
         style={styles.logo}
         />
           <View style={styles.header}>
                <Text style={[themeStyles.title]}>¡Hola, {user?.email || 'Desconocido'}!</Text>
                <Text style={styles.email}>Bienvenido a panel control</Text>
            </View>
    
 
         <View style={styles.innerContainer}>

         <TouchableOpacity style={styles.button}  onPress={()=> {router.push('/(tabs)/inicio')}}>
         <Ionicons name="albums-outline" size={28} color="white" />
          <Text style={styles.buttonText}>Panel de control</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.buttonLogout}  onPress={()=> {logout(); router.replace('/login')}}>
        <Ionicons name="exit" size={28} color="white" />
          <Text style={styles.buttonText}>Cerrar Sesion</Text>
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
        padding: 20,
       
      },
      innerContainer: {
        width: '100%',
        maxWidth: 300,
        padding: 10,
        borderRadius: 15,   
        
      
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
     borderRadius: 60,
      
    },
    button: {
      width: '100%',
      backgroundColor: '#666',
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      flexDirection: 'row',
    },
    buttonLogout: {
      width: '100%',
      backgroundColor: '#FF4C4C',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 10,
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      
      padding: 10,
     
    },
    email: {
      fontSize: 16,
      color: '#777',
    },
    header: {
      alignItems:'center',
      marginBottom:20,
      fontSize: 18,
      fontWeight: 'bold',
    }
  });