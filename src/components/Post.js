import React from 'react'
import "./PostsAndTodos.css";

const Post = ({post}) => {
  return (
    <div className="single-post">
    <p><span>Title:</span> {post.title}</p>
    <p><span>Body:</span> {post.body}</p>
  </div>
  )
}

export default Post
