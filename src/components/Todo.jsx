import { useState } from "react";
import { toast } from "react-toastify";
const Todo = () => {
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState([]);

  function addTodo() {
    if (!value) {
      toast.error("Please enter input field", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "colored",
      });
    } else {
      let obj = {
        id: Date.now(),
        todo: value,
      };
      setTodos([...todos, obj]);
      setValue("");
    }
  }
  return (
    <>
      <h2>Todo Application</h2>
      <input
        type="text"
        name="input"
        placeholder="Enter your todo"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        type="button"
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;