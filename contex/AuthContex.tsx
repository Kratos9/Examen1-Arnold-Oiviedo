import { createContext, useContext, useState } from "react"


type User = {email: string} | null;
type Task = {
    id: number;
    titulo: string;
    description: string;
  };
const AuthContext = createContext<{
    user: User,
    isAllowed: boolean; 
    login: (email: string) => void;
    logout: () => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void; // Añadido
} | null>(null);


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error ("useAuth debe userse dentro AuthProvider");
    return context;

}


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, titulo: 'Tarea 1', description: 'Descripción de la tarea 1' },
        { id: 2, titulo: 'Tarea 2', description: 'Descripción de la tarea 2' },
      ]);

    const login = (email: string) =>{
        const isValidEmail = email.endsWith('@gmail.com');

        if (isValidEmail){
            setUser({email})
            setIsAllowed(true);
        }else{
            setUser(null);
            setIsAllowed(false);
            alert("Solo correos @gmail.com pueden ingresar")
        }
    };

    const logout = () =>{
        setUser(null);
        setIsAllowed(false);
        
    }
    return(
        <AuthContext.Provider value={{user, isAllowed, login, logout, tasks, setTasks}}>
            {children}
        </AuthContext.Provider>
    )
}