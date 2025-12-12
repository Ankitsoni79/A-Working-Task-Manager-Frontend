import React, { useState } from "react";
import ItemCard from "./ItemCard";

const Project = () => {
  const [task, setTask] = useState("");       // useState #1
  const [tasks, setTasks] = useState([]);     // useState #2

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div>
      <h2>Project</h2>

      {/* Add Item Form */}
      <div className="d-flex mt-3 mb-3">
        <input
          className="form-control"
          placeholder="Add item..."
          value={task}
          onChange={(e) => setTask(e.target.value)}   // useState #3
        />
        <button className="btn btn-primary ms-2" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Items List */}
      {tasks.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          index={index}
          toggleItem={toggleTask}
          deleteItem={deleteTask}
        />
      ))}

      {/* Clear All */}
      {tasks.length > 0 && (
        <button className="btn btn-danger mt-3" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default Project;
