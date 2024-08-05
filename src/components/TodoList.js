export default function TodoList({ $target, intialState, onDelete }) {
  const $list = document.createElement("div");
  $target.appendChild($list);

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onDelete(id);
    }
  });

  this.render = () => {
    $list.innerHTML = `
    <ul>
      ${this.state
        .map(
          (row) => `<li>
        [${row.id}]
        <span>${row.text}</span>
        <button data-id="${row.id}" class="del_btn">🗑️</button>
        </li>`
        )
        .join("")}
    </ul>
  `;
  };

  this.render();
}
