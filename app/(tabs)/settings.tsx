import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { darkTheme, lightTheme } from "@/styles/themes";
import { useTheme } from "@/contex/ThemeContext";

export default function SettingsScreen() {
    const { theme, toggleTheme } = useTheme();
    const styles = theme === "dark" ? darkTheme : lightTheme;

    return (
        
 <View style={styles.container}>
            <Text style={styles.text}>
                Modo Actual: Claro | Oscuro
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={toggleTheme}>
                <Text
                    style={styles.buttonText}
                >Cambiar Tema</Text>
            </TouchableOpacity>
        </View>
       
    )
}
