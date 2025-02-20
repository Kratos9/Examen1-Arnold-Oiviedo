
import { useAuth } from "@/contex/AuthContex";
import { router, useRouter } from "expo-router";
import { View, Text, Button, StyleSheet, Image } from "react-native";


export default function SettingsScreen(){
    const {user} = useAuth ();
                                                                                   
    const router = useRouter();
    return (
        <View style={styles.container}>
               
            <Text style= {styles.text}>Upcoming Features</Text>
            <Button title="Volver" onPress={()=>{router.back() }}>
                
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
      borderRadius: 40,
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginLeft: 5,
      },
  });