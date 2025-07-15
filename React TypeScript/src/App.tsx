import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvoder from "./store/todos-context";

function App() {
  return (
    <div className="App">
      <TodoContextProvoder>
        <NewTodo />
        <Todos />
      </TodoContextProvoder>
    </div>
  );
}

export default App;
