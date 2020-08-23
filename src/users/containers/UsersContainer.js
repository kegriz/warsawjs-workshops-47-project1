import React, { Component } from "react";
import UsersList from "../components/UsersList";

class UsersContainer extends Component {
  state = {
    // users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return <div className="UsersContainer">{users ? <UsersList users={users} /> : "ładowanie"}</div>;
  }
}

export default UsersContainer;
