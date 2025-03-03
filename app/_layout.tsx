
import { AuthProvider } from "@/contex/AuthContex";
import { TaskProvider } from "@/contex/TaskContex";
import { Stack } from "expo-router";


export default function RootLayout(){

    return(
        <AuthProvider>
            <TaskProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                  }}
          />
            </TaskProvider>
        </AuthProvider>
        
    )
}