import React from "react";
import "./App.css";
// import Timetable from './components/Timetable';
// import AddTimetable from './components/AddTimetable';
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
// import UserInput from './components/UserInput';
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import HOCList from "./components/HOCList";

const ThemeContext = React.createContext("dark");
const Users = HOCList(UserList, 'http://jsonplaceholder.typicode.com/users');
const Posts = HOCList(PostList, 'http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');

// const Users = HOCList(UserList, 'https://randomuser.me/api/?results=10&nat=gb&seed=devacademy');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",

      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Navbar />
          {/* <Modal  toggleModal={this.toggleModal} show={ this.state.showModal}/> */}
          <div className="container is-fluid">
            <div className="section">
              {/* <h1 className="title is-4">Random users</h1> */}
              <Users />
            </div>
            <div className="section">
              {/* <h1 className="title is-4">Posts</h1> */}
              <Posts />
            </div>
          </div>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
