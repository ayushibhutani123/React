import React, { useReducer } from "react";
import "./Todo.css";

export default function Todo() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Setvalue":
        return { ...state, value: action.value };
      case "ButtonClicked":
        const updatedItems = [...state.items, state.value];
        localStorage.setItem("todoItems", JSON.stringify(updatedItems));
        return {
          ...state,
          items: updatedItems,
          value: "",
        };
        case "prevClick":
          const storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
        return {
          ...state,
          items: storedItems,
          value: "",
        };
      default:
        return state;
    }
  };

  const initialState = {
    value: "",
    items: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    dispatch({
      type: "Setvalue",
      value: event.target.value,
    });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    dispatch({
      type: "ButtonClicked"
    });
  };
const handleonprevClick=(event)=>{
  dispatch({
    type:"prevClick"
  });
}

  return (
    <>
      <div className="container">
        <label htmlFor="Todo" className="todo">
          To Do List:
        </label>
        <br />
        <input
          type="text"
          className="inputtodo"
          value={state.value}
          onChange={handleInputChange}
        />
        <br />
        <button className="btn-success" onClick={handleOnClick}>
          Add
        </button>
        
        <button className="btn-success" onClick={handleonprevClick}>Preview Previous</button>
      </div>
      <div className="bodycontainer">
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
