import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    
  },
  addcontainer: {
   
    backgroundColor: "#FFFFFF",
    
  },
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  title:{
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownContainer: {
    marginBottom: 20,
    zIndex: 1000, // Asegura que el dropdown no se superponga mal con otros elementos
    color:"#ccc",
  },
  dropdown: {
    backgroundColor: "#F5F5F5",
    borderColor: "#ccc",
    borderRadius: 10,
    color:"#ccc",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    color: "#ccc",
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
   
  },
  addcontainer: {
   
    backgroundColor: "#121212",
    
  },
  title:{
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1abc9c",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownContainer: {
    marginBottom: 20,
    zIndex: 1000, // Asegura que el dropdown no se superponga mal con otros elementos
    color:"#ccc",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 10,
    color:"#ccc",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    color: "#ccc",
  },
});