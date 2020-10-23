import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";

function UserList() {
  const axios = require("axios");
  const [listOfUSer, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data));
  }, [axios]);
  return (
    <div className="d-flex flex-wrap">
      {listOfUSer.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  );
}

export default UserList;
