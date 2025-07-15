import { useRef, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import React from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      console.log("Please enter a valid todo text.");
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  return (
    <form className={classes.form} onSubmit={handleAddTodo}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
