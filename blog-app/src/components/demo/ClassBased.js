import React from "react";

class ClassBased extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      todos: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }))
      .catch(console.error);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h2>Class based component works!</h2>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}
        </button>

        <hr />
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBased;
