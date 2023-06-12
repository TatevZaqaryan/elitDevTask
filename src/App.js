import { useReducer } from "react";
import "./App.css";
import ToDoFooter from "./components/ToDoFooter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function reducer(state, action) {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false,
      },
    ];
  } else if (action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === "clear-completed") {
    return state.filter((todo) => !todo.isCompleted);
  } else if (action.type === "update") {
    return state.map((todo) => {
      if (todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo;
    });
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "cdgvfg ",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "cdgvfg dbhghr",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "cduehgufgvfg ",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <h1>to do</h1>
      <ToDoForm
        onAdd={(text) => {
          dispatch({
            type: "add",
            payload: {
              text: text,
            },
          });
        }}
      />
      <ToDoList
        todos={todos}
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: {
              id: todo.id,
            },
          });
        }}
        onChange={(newToDo) => {
          dispatch({
            type: "update",
            payload: {
              updatedTodo: newToDo,
            },
          });
        }}
      />
      <ToDoFooter
        todos={todos}
        onClearCompleted={() => {
          dispatch({
            type: "clear-completed",
          });
        }}
      />
    </div>
  );
}

export default App;
