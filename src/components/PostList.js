import React from "react";


//http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10
function PostList(props) {
  return (
    <>
      <h1 className="subtitle"> POSTS </h1>
      <ul>
          {
            props.data.map(post => 
            <li key={post.id}>{post.title}</li>   
          )
        }
      </ul>
    </>
  )
};

export default PostList;