
import { AuthProvider } from "@/contex/AuthContex";
import { TaskProvider } from "@/contex/TaskContex";
import { ThemeProvider } from "@/contex/ThemeContext";
import { store } from "@/store/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";


export default function RootLayout(){

    return(
        <Provider store={store}>
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
        </Provider>
    )
}