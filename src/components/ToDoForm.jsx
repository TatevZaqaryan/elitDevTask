import { useState } from "react";

const ToDoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoForm;
