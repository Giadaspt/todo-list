import React from "react";
//da classe che era diventa solo funzione perchè riceve i dati dall'HOC

function UserList (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  // }

  // async componentDidMount(){
  //   const users = await fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(result => result)
  //   console.log(users, "io sono users");

  //   this.setState(() => {
  //     return {
  //       users
  //     }
  //   })
  // }

    return (
      <>
        <h2 className="subtitle">USERS</h2>
        <ul>
          {props.data.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
}
export default UserList;
