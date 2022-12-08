import React from "react";

//da classe che era diventa solo funzione perchè riceve i dati dall'HOC

function PostList(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     posts: [],
  //   };
  // }

  // async componentDidMount(){
  //   const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
  //   .then(response => response.json())
  //   .then(result => result)

  //   this.setState(()=> {
  //     return {
  //       posts
  //     }
  //   })
  // }

    return (
      <>
        <h2 className="subtitle">POSTS</h2>
        <ul>
          {props.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    );
}

export default PostList;
