import React, { Component } from "react";

export default class Component_1 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentFunction() {
    let count = 1;
    this.setState({
      count: count,
    });
  }

  render() {
    return <h1>Component 1</h1>;
  }
}
