import { Task } from "../../App";

interface ListProps {
  task: Task;
}

export function List({ task }: ListProps) {
  return (
    <li>
      <h1>
        {task.id} {task.title}
      </h1>
    </li>
  );
}
