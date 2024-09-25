import "./App.css";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // Input text state
  const [tasks, setTasks] = useState([]); // Tasks list state
  const [editingId, setEditingId] = useState(null); // ID for editing task
  const [editText, setEditText] = useState(""); // Edit text

  // Function to add a new task
  const addTask = () => {
    if (inputText.trim()) {
      const newTask = {
        id: tasks.length + 1,
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]); // Add new task to the tasks array
      setInputText(""); // Clear input field after adding
    }
  };

  // Handle completing a task
  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle deleting a task
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle editing a task
  const handleEdit = (taskId, text) => {
    setEditingId(taskId);
    setEditText(text);
  };

  // Save the edited task
  const saveEdit = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: editText } : task
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <div className="container">
        <Header />
        <ToDoList
          tasks={tasks}
          inputText={inputText}
          setInputText={setInputText}
          addTask={addTask}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
        />
      </div>
    </>
  );
}

export default App;
