const ToDoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        {todo.text}
      </label>
      <button
        onClick={() => {
          onDelete(todo);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ToDoItem;
