import { ToDoItem } from "./ToDoItem";

export function ToDoList({
  tasks,
  inputText,
  setInputText,
  addTask,
  handleComplete,
  handleDelete,
  handleEdit,
  editingId,
  editText,
  setEditText,
  saveEdit,
}) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="InputBoxTo-Do"
        placeholder="Enter the task to be done"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="addto-do-btn" onClick={addTask}>
        Add
      </button>

      <div className="todo-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onComplete={() => handleComplete(task.id)}
            onDelete={() => handleDelete(task.id)}
            onEdit={() => handleEdit(task.id, task.text)}
            isEditing={editingId === task.id}
            editText={editText}
            onChangeEdit={(e) => setEditText(e.target.value)}
            onSaveEdit={() => saveEdit(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
