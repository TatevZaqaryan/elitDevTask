const ToDoFooter = ({ todos, onClearCompleted }) => {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div>
      <span>
        {completedSize} / {todos.length} Completed{" "}
      </span>
      <button onClick={onClearCompleted}>ClearCompleted</button>
    </div>
  );
};

export default ToDoFooter;
