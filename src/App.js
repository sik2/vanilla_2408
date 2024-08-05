import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  const intialState = ["item1", "item2", "item3"];

  const onSumbit = (text) => {
    const nextState = [...todoList.state, text];
    console.log(nextState);
    todoList.setState(nextState);
  };

  new Header({ $target });
  new TodoForm({
    $target,
    onSumbit,
  });
  const todoList = new TodoList({ $target, intialState });
}
