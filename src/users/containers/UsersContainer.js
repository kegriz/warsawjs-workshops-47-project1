import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";

// useWindowSize -> { x: 0, y:0 }, window.innerWidth, window.innerHeight
// własny hook ?

function UsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      // componentWillUnmount
    };
  }, []);


  return <div className="UsersContainer">{users ? <UsersList users={users} /> : "ładowanie"}</div>;
}

export default UsersContainer;
