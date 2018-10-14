import React, { Component } from "react";

import data from "../../data";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  deleteItem(id) {
    this.setState({
      data: this.state.data.filter(data => data.id !== id)
    });
  }

  render() {
    return this.state.data.map(({ id, greeting }) => (
      <li key={id}>
        {greeting}
        <button onClick={() => this.deleteItem(id)}>刪除</button>
      </li>
    ));
  }
}

export default List;
