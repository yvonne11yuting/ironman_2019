import React, { PureComponent } from "react";

class NewTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      todoVal: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.todoVal) {
      this.props.addNewTodo(this.state.todoVal);
      this.setState({ todoVal: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          className="form-text"
          value={this.state.todoVal}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NewTodo;
