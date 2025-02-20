
import { useAuth } from "@/contex/AuthContex";
import { Redirect, Stack } from "expo-router";


export default function ProtectedLayout(){
    const {isAllowed} = useAuth();
    if(!isAllowed) return <Redirect href="/login"/>

    return <Stack/>
}