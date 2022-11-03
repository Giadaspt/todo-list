import React from "react";

//http://jsonplaceholder.typicode.com/users
function UserList(props){
  return (
    <>
      <h1 className="subtitle"> USERS </h1>
      <ul>
        {
          props.data.map(user =>
          <li key={user.id}> {user.username} </li>
          )}
      </ul>
    </>
  )
};

export default UserList;