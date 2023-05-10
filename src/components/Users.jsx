// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("delete success");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Total User: {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name}: {user.email}{" "}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
