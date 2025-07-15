import React from "react";
import { useState } from "react";
import Todo from "../models/todo";

type todoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteList: (id: string) => void;
};

export const TodoContext = React.createContext<todoContextType>({
  items: [],
  addTodo: () => {},
  deleteList: () => {},
});

const TodoContextProvoder: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    deleteList: deleteTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvoder;
