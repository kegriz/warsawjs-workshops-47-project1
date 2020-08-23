import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";

function UsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  return <div className="UsersContainer">{users ? <UsersList users={users} /> : "ładowanie"}</div>;
}

export default UsersContainer;
