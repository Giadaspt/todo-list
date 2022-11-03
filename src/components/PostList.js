import React from "react";

class PostList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  };

  async componentDidMount(){
    const posts = await fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    .then(response => response.json())
    .then(result => result);

    this.setState((prevState, props) =>{
      // questo nel caso in cui l'array fosse pieno allora viene modificato, altrimenti array vuoto e come sotto
      // return {
      //   posts: [...prevState.posts, posts]
      // }
      return {
        posts: [...posts]
      }
    })
  }


  render(){
    return (
      <>
        <h1 className="subtitle"> POSTS </h1>
        <ul>
            {
              this.state.posts.map(post => 
                <li key={post.id}>{post.title}</li>   
              )
            }
        </ul>
      </>
    )
  }
};

export default PostList;