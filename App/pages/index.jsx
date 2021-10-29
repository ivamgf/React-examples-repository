import React, { Component } from "react";

export default class Exemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      count: 0,
    };
  }

  changeColor(e) {
    let count = this.state.count;
    let color = ++count % 2 == 0 ? "red" : "blue";
    this.setState({
      color: color,
      count: count,
    });
  }

  exampleText() {
    (<example text="Hello World!" />), document.querySelector("#example");
  }

  render(exampleText) {
    const styleExample = {
      padding: 10,
      background: this.state.color,
    };
    return (
      <h1 style={styleExample} onClick={this.changeColor.bind(this)}>
        {this.props.text}
      </h1>
    );
  }
}
