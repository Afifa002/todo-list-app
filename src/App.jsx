import "./App.css";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); 
  const [tasks, setTasks] = useState([]); 
  const [editingId, setEditingId] = useState(null); 
  const [editText, setEditText] = useState("");
  

  const addTask = () => {
    if (inputText.trim()) {
      const newTask = {
        id: tasks.length + 1,
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]); 
      setInputText(""); 
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
