import React from "react";

function UsersList({ users }) {
  return (
    <div className="UsersList">
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
