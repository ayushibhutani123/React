import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react";
function App() {
  const [userInput, SetUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid=userInput.duration>=1;
  function handleChange(inputIdentifier, newValue) {
    SetUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
    <Header/>
    <UserInput  userInput={userInput} onChangeInput={handleChange}/>
    {!inputIsValid &&<p className="center">Please enter a duration greater than zero</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
