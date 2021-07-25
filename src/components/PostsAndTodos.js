import React, { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import "./PostsAndTodos.css";
import Todo from "./Todo";
import Post from "./Post";
import DynamicAddForm from "./DynamicAddForm";

const PostsAndTodos = ({ user }) => {
  const {
 
    todos,
    posts,
    adderFunc,
    setTodos,
    setPosts,
  } = useContext(AppContext);
  const [displayAllTodos, setDisplayAllTodos] = useState(false);
  const [displayUnfinishedTodos, setDisplayUnfinishedTodos] = useState(true);
  const [displayAddTodo, setDisplayAddTodo] = useState(false);
  const [displayAddPost, setDisplayAddPost] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(true);
  const filterTodos = todos.filter((x) => x.userId === user.id);
  const filterUncompletedTodos = filterTodos.filter((x) => !x.completed);
  const filterPosts = posts.filter((x) => x.userId === user.id);
  return (
    <div className="side-div-container">
      {displayAddTodo ? (
        <DynamicAddForm
          
          formType="todo"
          headerTitle="New Todo -"
          submitObj={{
            userId: user.id,
            id: todos.length + 1,
            title: "",
            completed: false,
          }}
          inputOne={{ name: "title", value: "title", type: "text" }}
          cancelFunction={() => {
            setDisplayUnfinishedTodos(false);
            setDisplayAllTodos(true);
            setDisplayAddTodo(false);
          }}
          submitFunction={(obj) => adderFunc(todos, setTodos, obj)}
        />
      ) : (
        <div className="title">
          <h3>
            <span>Todos - User {user.id}</span>
            <button
              onClick={() => {
                setDisplayUnfinishedTodos(false);
                setDisplayAllTodos(false);
                setDisplayAddTodo(true);
              }}
            >
              Add
            </button>
          </h3>
          <div className="title-div">
          <button
            onClick={() => {
              setDisplayAllTodos(true);
              setDisplayUnfinishedTodos(false);
            }}
            style={{backgroundColor: displayAllTodos ? "#388e3c": "#ccc", color: displayAllTodos ? "white": "black"}}
          >
            All Todos
          </button>
          <button
            onClick={() => {
              setDisplayAllTodos(false);
              setDisplayUnfinishedTodos(true);
            }}
            style={{backgroundColor: displayUnfinishedTodos ? "#388e3c": "#ccc", color: displayUnfinishedTodos ? "white": "black"}}
          >
            !completed
          </button>
          </div>
          <div className="flex-task">
            {displayAllTodos && (
              <div>
                {filterTodos.map((todo, i) => {
                  return <Todo key={i} todo={todo} />;
                })}
              </div>
            )}
            {displayUnfinishedTodos && (
              <div>
                {filterUncompletedTodos.map((todo, i) => {
                  return <Todo key={i} todo={todo} />;
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {displayAddPost ? (
        <DynamicAddForm
          
          formType="post"
          headerTitle="New Post -"
          submitObj={{
            userId: user.id,
            id: posts.length + 1,
            title: "",
            body: "",
          }}
          inputOne={{ name: "title", value: "title", type: "text" }}
          inputTwo={{ name: "body", value: "body", type: "text" }}
          cancelFunction={() => {
            setDisplayPosts(true);
            setDisplayAddPost(false);
          }}
          submitFunction={(obj) => adderFunc(posts, setPosts, obj)}
        />
      ) : (
        <div className="title">
          <h3>
            Posts - User {user.id}
            <button
              onClick={() => {
                setDisplayPosts(false);
                setDisplayAddPost(true);
              }}
            >
              Add
            </button>
          </h3>

          {displayPosts && (
            <div>
              {filterPosts.map((post, i) => {
                return <Post key={i} post={post} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostsAndTodos;
