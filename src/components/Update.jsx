// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(name, email);
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
      });
  };
  return (
    <div>
      <p> Update information of: {loadedUser.name}</p>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
