export default function Header({ $target }) {
  const $header = document.createElement("h1");
  $target.appendChild($header);

  this.state = "오늘 할일";
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $header.textContent = this.state;
  };

  this.render();
}
