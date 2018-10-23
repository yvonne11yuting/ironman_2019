import React, { Component } from "react";

import UserList from "./user_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      isLoading: false
    };
    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    this.setState({ isLoading: true });
    fetch(`https://randomuser.me/api/?results=100`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          userList: response.results
        });
      });
  }

  render() {
    return (
      <div>
        <UserList
          isLoading={this.state.isLoading}
          userList={this.state.userList}
        />
      </div>
    );
  }
}

export default App;
