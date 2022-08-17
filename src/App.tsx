import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";

export type Task = {
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
    setTitle("");
  }

  return (
    <>
      <Header />
      <Form
        title={title}
        setTitle={setTitle}
        handleCreateTasks={handleCreateTask}
      />
      {tasks.map((task) => (
        <ul>
          <List task={task} />
        </ul>
      ))}
    </>
  );
}
