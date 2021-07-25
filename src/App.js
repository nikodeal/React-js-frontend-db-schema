import React, { useContext, useState } from "react";
import { AppContext } from "./context/ContextProvider";
import { PersonPlus, Search, XLg } from "react-bootstrap-icons";
import "./App.css";
import User from "./components/User";
import PostsAndTodos from "./components/PostsAndTodos";
import DynamicAddForm from "./components/DynamicAddForm";
const App = () => {
  const { users, loading, todos, setUsers, adderFunc } = useContext(AppContext);
  const [displayTodosAndPosts, setDisplayTodosAndPosts] = useState(false);
  const [displayAddUser, setDisplayAddUser] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [search, setSearch] = useState("");
  const [activeUser, setActiveUser] = useState({});
  const setUserDetailsToDiv = (currentUser) => {
    setDisplayTodosAndPosts(true);
    setDisplaySearchBar(false)
    setDisplayAddUser(false)
    setActiveUser(currentUser);
  };

  const searchFilter = users.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().indexOf(query) >= 0||
      item.email.toLowerCase().indexOf(query) >= 0
    );
  });


  return (
    <div>
      <header className="header">
        <div className="typewriter">
          <h1>-Todoo-</h1>
        </div>
        <div className="nav-btns">
          <button
            onClick={() => {
              setDisplayAddUser(false);
              setDisplayTodosAndPosts(false);
              setDisplaySearchBar(true);
            }}
          >
            <Search size={20} />
          </button>
          <button
            onClick={() => {
              setDisplayTodosAndPosts(false);
              setDisplayAddUser(true);
              setDisplaySearchBar(false)
            }}
          >
            <PersonPlus size={20} />
          </button>
        </div>
      </header>
      <div className="container">
        {loading && <h1>Loading....</h1>}
        <div className="users-container">
          {searchFilter.map((singleUser, i) => {
            let flag = false;
            const filterTodo = todos.filter((x) => x.id === singleUser.id);
            for (let i = 0; i < filterTodo.length; i++) {
              if (!filterTodo[i].completed) {
                flag = true;
            }}
            return (
              <User
                user={singleUser}
                key={i}
                redBorder={flag}
                activeUser={setUserDetailsToDiv}
              />
            );
          })}
        </div>
        {displaySearchBar && (
          <div className='form-container'>
            <h4 className='form-title'>
            Search{" "}
            <input
            className='form-input'
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /></h4>
            <div className="form-btns-cont">    <button
              onClick={() => {
                setDisplayAddUser(false);
                setDisplayTodosAndPosts(false);
                setDisplaySearchBar(false);
                setSearch("");
              }}
            >
              <XLg size={20} />
            </button>
              </div>
        
          </div>
        )}
        {displayAddUser && (
          <DynamicAddForm
            newUserTitle="Add New User"
            formType="newUser"
            submitObj={{
              userId: activeUser.id,
              id: users.length + 1,
              name: "",
              email: "",
              address: {
                city: "empty",
                street: "empty",
                zipcode: "empty",
              },
            }}
            inputOne={{ name: "name", value: "name", type: "text" }}
            inputTwo={{ name: "email", value: "email", type: "email" }}
            cancelFunction={() => {
              setDisplayTodosAndPosts(false);
              setDisplayAddUser(false);
            }}
            submitFunction={(obj) => adderFunc(users, setUsers, obj)}
          />
        )}
        {displayTodosAndPosts && <PostsAndTodos user={activeUser} />}
      </div>
    </div>
  );
};

export default App;
