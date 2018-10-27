import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../../actions";

import NewTodo from "./NewTodo";

class NewTodoContainer extends PureComponent {
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
      <NewTodo
        todoVal={this.state.todoVal}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, { addNewTodo })(NewTodoContainer);
