import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { CheckLg } from "react-bootstrap-icons";
import "./PostsAndTodos.css";


const Todo = ({ todo }) => {
  const { updateFunc, todos, setTodos } = useContext(AppContext);
  
  return (
    <div className="single-todo">
      <p><span>Title:</span> {todo.title} </p>
      {todo.completed ? (
        <p><span>Completed:</span> True <span style={{width : "7%", display: "block"}}></span></p>
      ) : (
        <p>
          <span>Completed: </span> False
          <button
            onClick={() => {
              let temp = todo
              todo.completed = true
              updateFunc(todos, todo.id, setTodos, temp)
            }}
          >
            <CheckLg size={20} />
          </button>
        </p>
      )}
    </div>
  );
};

export default Todo;
