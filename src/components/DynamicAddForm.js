import React, { useState } from "react";
import "./PostsAndTodos.css";

const DynamicAddForm = ({
  formType,
  headerTitle,
  submitObj,
  inputOne,
  inputTwo,
  newUserTitle,
  cancelFunction,
  submitFunction,
}) => {
  const [inputOneState, setInputOneState] = useState("");
  const [inputTwoState, setInputTwoState] = useState("");

  return (
    <div className='form-container'>
      {headerTitle && (
        <h4 className='form-title'>
          {headerTitle} User {submitObj.userId}
        </h4>
      )}
      {newUserTitle && <h4 className='form-title'>{newUserTitle}</h4>}
      <p className='form-ptag'>
        {inputOne.name}:
        <input
        className='form-input'
          type={inputOne.type}
          value={inputOneState}
          onChange={(e) => setInputOneState(e.target.value)}
        />
      </p>
      {inputTwo ? (
        <p className='form-ptag'>
          {inputTwo.name}:
          <input
          className='form-input'
            type={inputTwo.type}
            value={inputTwoState}
            onChange={(e) => setInputTwoState(e.target.value)}
          />{" "}
        </p>
      ) : (
        ""
      )}
      <p className='form-btns-cont'>
        <button onClick={cancelFunction}>Cancel</button>
        <button
          onClick={() => {
            if (formType === "todo") {
              submitObj.title = inputOneState;
              submitFunction(submitObj);
              cancelFunction()
            }else if(formType === "post"){
              submitObj.title = inputOneState;
              submitObj.body = inputTwoState;
              submitFunction(submitObj);
              cancelFunction()
            }else if(formType === "newUser"){
              submitObj.name = inputOneState;
              submitObj.email = inputTwoState;
              submitFunction(submitObj);
              cancelFunction()
            }else{
              console.log("not valid");
            }
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};

export default DynamicAddForm;
