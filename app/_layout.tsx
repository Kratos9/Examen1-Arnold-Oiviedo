
import { AuthProvider } from "@/contex/AuthContex";
import { Stack } from "expo-router";


export default function RootLayout(){

    return(
        <AuthProvider>
            <Stack
          
             />
        </AuthProvider>
        
    )
}