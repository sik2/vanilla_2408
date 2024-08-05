import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  const intialState = [
    { id: 1, text: "item1", checked: true },
    { id: 2, text: "item2", checked: false },
    { id: 3, text: "item3", checked: false },
  ];

  let lastId = 4;

  const onSumbit = (text) => {
    const nextState = [...todoList.state, { id: lastId, text, checked: false }];
    todoList.setState(nextState);
    lastId++;
  };

  const onDelete = (id) => {
    const nextState = todoList.state.filter((todo) => todo.id !== id);
    todoList.setState(nextState);
  };
  const header = new Header({ $target });
  new TodoForm({
    $target,
    onSumbit,
  });
  const todoList = new TodoList({ $target, intialState, onDelete });
}
