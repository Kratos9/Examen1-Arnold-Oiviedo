// TaskContext.tsx
import { createContext, useContext, useState } from "react";

type Task = {
  id: number;
  anuncio: string;
  persona: string;
  motivo: string;
  dni: string;
  vehiculo: string;
};

const TaskContext = createContext<{
  tasks: Task[];
  addTask: (task: Task) => void; // Se usa una función para agregar tareas
} | null>(null);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask debe usarse dentro de TaskProvider");
  return context;
};

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Función para agregar tareas al estado
  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
