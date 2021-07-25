import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import "./User.css";

const User = ({ user, redBorder, activeUser }) => {
  const { users, setUsers, deleteFunc, updateFunc } = useContext(AppContext);
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    setUserForm({
      id: user.id,
      name: user.name,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
      zipCode: user.address.zipcode,
    });
  }, []);
  const [userForm, setUserForm] = useState({
    id: 0,
    name: "",
    email: "",
    street: "",
    city: "",
    zipCode: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  return (
    <div
      className="user-container"
      onClick={() => {
        activeUser(user);
      }}
    >
      <div
        className="user-div"
        style={{
          boxShadow: redBorder
            ? "0.2rem 0.2rem #212121, -0.2rem -0.2rem #ef5350"
            : "0.2rem 0.2rem black, -0.2rem -0.2rem #388e3c",
        }}
      >
        <p>
          <span className="input-names">ID: {user.id}</span>
        </p>
        <p>
         <span className="input-names">Name:</span> 
          <input
            value={userForm.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </p>
        <p>
          <span className="input-names">Email:</span>
          <input
            type="email"
            value={userForm.email}
            onChange={handleChange}
            name="email"
          />
        </p>
        
        <div
          onClick={() => {
            setDisplayDetails(false);
          }}
          onMouseOver={() => {
            setDisplayDetails(true);
          }}
          className="more-data"
        >
          More Data
        </div>
        {displayDetails && (
          <div>
            <p>
              <span className="input-names">Street:</span>
              <input
                value={userForm.street}
                type="text"
                onChange={handleChange}
                name="street"
              />
            </p>
            <p>
              <span className="input-names">City:</span>
              <input
                type="text"
                value={userForm.city}
                onChange={handleChange}
                name="city"
              />
            </p>
            <p>
              <span className="input-names">Zip Code:</span>
              <input
                value={userForm.zipCode}
                type="text"
                onChange={handleChange}
                name="zipCode"
              />
            </p>
          </div>
        )}

        <div className="user-div-btns">
          <button
            onClick={() => updateFunc(users, user.id, setUsers, userForm)}
          >
            Update
          </button>
          <button onClick={() => deleteFunc(users, user.id, setUsers)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
