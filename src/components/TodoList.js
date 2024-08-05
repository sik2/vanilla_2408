export default function TodoList({ $target, intialState }) {
  const $list = document.createElement("div");
  $target.appendChild($list);

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $list.innerHTML = `
    <ul>
      ${this.state.map((row) => `<li>${row}</li>`).join("")}
    </ul>
  `;
  };

  this.render();
}
