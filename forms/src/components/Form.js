import React, { useState } from 'react';
import './Form.css';
import Print from './Print';

export default function Form() {
  const [array, setArray] = useState([]);
  const [state, setState] = useState({
    FirstName: '',
    LastName: '',
    Gender: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setSubmitted(true);
    setArray((prevArray) => {
      const newArray = [...prevArray, state];
      localStorage.setItem('formData', JSON.stringify(newArray));
      return newArray;
    });
  };
  
  

  return (
    <>
      <div className="form-container">
        <h2 className="form-heading">User Information</h2>

        <label htmlFor="fname">First Name</label>
        <input type="text" name="FirstName" value={state.FirstName} onChange={handleInputChange} id="fname" />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="LastName" value={state.LastName} onChange={handleInputChange} id="lname" />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="Gender" value={state.Gender} onChange={handleInputChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
      {submitted && <Print array={array} />}
    </>
  );
}
