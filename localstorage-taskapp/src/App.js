import { useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

const App = () => {
  const [tasksItems, setTasksItems] = useState([
    { name: "Task 1", done: false },
    { name: "Task 2", done: false },
    { name: "Task 3", done: false },
  ]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
