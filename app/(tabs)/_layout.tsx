import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "index") {
                        iconName = focused ? "inicio" : "home-outline"
                    } else if (route.name === "inicio") {
                        iconName = focused ? "reader" : "reader-outline"
                    } else if (route.name === "añadirtarea") {
                        iconName = focused ? "receipt" : "receipt-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
            })}
        />
    )
}