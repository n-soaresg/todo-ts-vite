import { useState } from "react";

interface FormProps {
  title: string;
  setTitle: (event: any) => void;
  handleCreateTasks: () => void;
}

export function Form({ title, setTitle, handleCreateTasks }: FormProps) {
  return (
    <>
      <input
        type=""
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={() => handleCreateTasks()}>Add task</button>
    </>
  );
}
