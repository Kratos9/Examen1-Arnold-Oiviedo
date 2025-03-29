import { Platform } from "react-native";

//ORIGEN PARA WEB O UTULIZAR EN LA COMPUTADORA
const LOCALHOST = "localhost:5037";
export const BASE_URL = "http://192.168.1.5:5432"; 
//configurar para android
const EMULATOR_HOST= "";
//configurar para dispositivo fisico(expo go)
const DEVICE_HOST = "192.168.1.5"; 

/*export const BASE_URL =
  Platform.OS === "android"
    ? (__DEV__ ? `http://${EMULATOR_HOST}` : `http://${DEVICE_HOST}`)
    : `http://${LOCALHOST}`;*/