
import { AuthProvider } from "@/contex/AuthContex";
import { TaskProvider } from "@/contex/TaskContex";
import { ThemeProvider } from "@/contex/ThemeContext";
import { Stack } from "expo-router";


export default function RootLayout(){

    return(
        <AuthProvider>
            <TaskProvider>
                <ThemeProvider>
                    <Stack
                        screenOptions={{
                         headerShown: false,
                         }}
                     />
                </ThemeProvider>
            </TaskProvider>
        </AuthProvider>
        
    )
}