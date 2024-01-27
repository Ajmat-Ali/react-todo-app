import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const newValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newFormState = {
      ...formState,
      [event.target.name]: newValue,
    };
    setFormState(newFormState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newTask = [...tasks, formState];
    setTasks(newTask);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }
  function handleDelete(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function handleToggle(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            onChange={handleChange}
            value={formState.task}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              onChange={handleChange}
              checked={formState.completed}
            />
          </label>
          <select
            name="taskAssignedTo"
            onChange={handleChange}
            value={formState.taskAssignedTo}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          a={index}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
}

export default App;
