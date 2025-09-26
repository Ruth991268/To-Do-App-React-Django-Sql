import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/tasks/");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await axios.post("http://127.0.0.1:8000/api/tasks/", {
      title: newTask,
      completed: false,
    });
    setNewTask("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`);
    fetchTasks();
  };

  return (
    <div className="task-container">
      {/* Left side: stack of rectangles */}
      <div className="stack">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`stack-box ${task.completed ? "completed" : ""}`}
          ></div>
        ))}
      </div>

      {/* Right side: task list */}
      <div className="task-list">
        <h2>My Tasks</h2>
        <div className="task-input-container">
          <input
            type="text"
            placeholder="Enter a new task (supports longer descriptions)..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            maxLength={200} // Limit input length to prevent overflow
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={task.completed ? "completed" : ""}
                onClick={() => toggleTask(task)}
                style={{ cursor: "pointer" }}
              >
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;