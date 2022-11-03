import React from "react";

class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  };

  async componentDidMount(){
    const users = await fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => result);
    console.log({users});

    this.setState( (prevState, props) =>{
      // questo nel caso in cui l'array fosse pieno allora viene modificato, altrimenti array vuoto e come sotto
      // return {
      //   users: [...prevState.users, users]
      // }
      return {
        users: [...users]
      }
    })
  }

  render(){
    return (
      <>
        <h1 className="subtitle"> USERS </h1>
        <ul>
            {
              this.state.users.map(user =>
                <li key={user.id}> {user.username} </li>
              )
            }
        </ul>
      </>
    )
  }
};

export default UserList;