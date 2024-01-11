import React,{useReducer} from "react";
import "./Todo.css";
export default function Todo() {
    const Changereducer=(state,action)=>{
switch(action.type){
    case "buttonclick":
    return {...state,value:action.value};
    case "addTodo":
        const updatedItems= [...state.items, state.value];
        const updatedItemsstring=JSON.stringify(updatedItems);

        localStorage.setItem('user',updatedItemsstring)
        return{...state,items:updatedItems , value: "" }
    default:
        return state;
}
    }
    // const[inputText,setInputtext]=useState("");
    const[state,dispatch]=useReducer(Changereducer,{value:"",items:[]})
    const handleonChange=(event)=>{
        console.log(event.target.value)
        dispatch({
            type:"buttonclick",
            value:event.target.value
        })
            }
            const handleonClick=(event)=>{
                const storedItems = localStorage.getItem('user');
    if (storedItems) {
dispatch({
    type:"addTodo"
})
            }}
            console.log("Updated items array:", state.items);
  return (
    <>
      <div className="container">
        <label forname="Todo" className="todo">
          To Do List:
        </label>
        <br></br>
        <input type="text" className="inputtodo" value={state.value} onChange={handleonChange} ></input><br></br>
<button className="btn-success" onClick={handleonClick}>Add</button>
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
