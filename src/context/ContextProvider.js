import React, { createContext, useEffect, useState } from "react";
import { getPostsData, getTodosData, getUsersData } from "./DataAccessLayer";
import { deleteFunc, updateFunc, adderFunc } from "./CRUD";

export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getUsersData(setUsers);
      getTodosData(setTodos);
      getPostsData(setPosts);
      setLoading(false);
    }
  }, []);
  return (
    <AppContext.Provider
      value={{ loading, users, setUsers, todos, setTodos, posts, setPosts ,deleteFunc, updateFunc, adderFunc}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
