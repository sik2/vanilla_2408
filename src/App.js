import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({ $target }) {
  const intialState = getItem("todos", [
    { id: 1, text: "item1", checked: true },
    { id: 2, text: "item2", checked: false },
    { id: 3, text: "item3", checked: false },
  ]);

  const length = intialState.length;
  let lastId = intialState[length - 1].id;

  const onSumbit = (text) => {
    const nextState = todoList.state.concat([
      {
        id: lastId + 1,
        text,
        checked: false,
      },
    ]);

    console.log(nextState);
    lastId++;
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const onDelete = (id) => {
    const nextState = todoList.state.filter((todo) => todo.id !== id);
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const onToggle = (id) => {
    const nextState = todoList.state.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    console.log(nextState);
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const header = new Header({ $target });
  new TodoForm({
    $target,
    onSumbit,
  });
  const todoList = new TodoList({ $target, intialState, onDelete, onToggle });
}
