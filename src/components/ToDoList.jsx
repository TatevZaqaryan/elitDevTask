import ToDoItem from "./ToDOItem";

const ToDoList = ({ todos, onDelete, onChange }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
