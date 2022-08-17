import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  function handleCreateTask() {
    const task = {
      id: tasks.length + 1,
      title,
      isComplete: false,
    };

    const newTasks = [...tasks, task];
    setTasks(newTasks);
    console.log(tasks);
  }

  return (
    <>
      <Header />
      <Form
        title={title}
        setTitle={setTitle}
        handleCreateTasks={handleCreateTask}
      />
    </>
  );
}
