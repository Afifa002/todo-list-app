import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export function ToDoItem({
  task,
  onComplete,
  onDelete,
  onEdit,
  isEditing,
  editText,
  onChangeEdit,
  onSaveEdit,
}) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <span className="todo-text">{task.text}</span>
          <div className="todo-actions">
            <button className="cmplt-btn" onClick={onComplete}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="edit-btn" onClick={onEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="dltbtn" onClick={onDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={onChangeEdit}
          />
          <button className="save-btn" onClick={onSaveEdit}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        </>
      )}
    </div>
  );
}
