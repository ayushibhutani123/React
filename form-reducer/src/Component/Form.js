import React, { useReducer } from 'react';
import "./Form.css";

export default function Form() {
  const emailReducer = (state, action) => {
    switch(action.type){
      case "Emailvalue":
        return {
          ...state,
          emailvalue: action.value
        };
      case "Passwordvalue":
        return {
          ...state,
          passwordvalue: action.value
        };
  
        case "Btnclick":
          return{
           ...state,
           buttonclick:action.buttonclick
          };
          
      default:
        return state;
    }
  };

  
  const handlechange = (event, type) => {
    dispatchemail({
      type: type,
      value: event.target.value

    });
  }

  const [emailvalue, dispatchemail] = useReducer(emailReducer, {
    emailvalue: "",
    passwordvalue: "",
    buttonclick:false
  });


  console.log(emailvalue);
const show=(event)=>{
dispatchemail({
  type:"Btnclick",
  buttonclick:true
})
}
  return (

    <>
    <div className='navbar'>
    <button  onClick={show} className="submit-btnn">Login</button>
    </div>
    {emailvalue.buttonclick &&
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              id="email"
              onChange={(event) => handlechange(event, "Emailvalue")}
              className="input"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="text"
              id="password"
              onChange={(event) => handlechange(event, "Passwordvalue")}
              className="input"
            />
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>}
    </>
  );
}
