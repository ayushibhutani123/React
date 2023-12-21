import React, { useState } from "react";
import Calcbutton from "./Calcbutton";
import "./Calculator.css";
import Printcontainer from "./Printcontainer";
export default function Calculator() {
  const zerowaliclass = "zerowaliclass";
  const [calcValue, setcalcValue] = useState("");
hh
  const printdata = () => {
    setcalcValue("");
  };
  const printdata1 = () => {
    setcalcValue("-");
  };
 
  const printdata2 = () => {
   
      const result = new Function('return ' + calcValue)();
      setcalcValue(result.toString());
    
  };
  
  // const printdata2=(value)=>{
  //   setcalcValue(eval('value'));
  // }
  
  const getdata = (value) => {
    setcalcValue((prevvalue) => prevvalue + value);
    
  };

  return (
    <>
      <div>
        <div className="Maincontainer">
          <Printcontainer calcValue={calcValue} />
          <div className="toprowvalues">
            <Calcbutton printdata={printdata} getdata={getdata} value={"A/c"} />
            <Calcbutton
              printdata1={printdata1}
              getdata={getdata}
              value={"+/-"}
            />
            <Calcbutton getdata={getdata} value={"%"} />
            <Calcbutton getdata={getdata} value={"/"} />
          </div>
          <div className="firstrowvalues">
            <Calcbutton getdata={getdata} value={"7"} />
            <Calcbutton getdata={getdata} value={"8"} />
            <Calcbutton getdata={getdata} value={"9"} />
            <Calcbutton getdata={getdata} value={"*"} />
          </div>
          <div className="secondrowvalues">
            <Calcbutton getdata={getdata} value={"4"} />
            <Calcbutton getdata={getdata} value={"5"} />
            <Calcbutton getdata={getdata} value={"6"} />
            <Calcbutton getdata={getdata} value={"-"} />
          </div>
          <div className="thirdrowvalues">
            <Calcbutton getdata={getdata} value={"1"} />
            <Calcbutton getdata={getdata} value={"2"} />
            <Calcbutton getdata={getdata} value={"3"} />
            <Calcbutton getdata={getdata} value={"+"} />
          </div>
          <div className="lastrowvalues">
            <Calcbutton
              getdata={getdata}
              zerowaliclass={zerowaliclass}
              value={"0"}
            />
            <Calcbutton getdata={getdata} value={"."} />
            <Calcbutton getdata={printdata2} value={"="} />

          </div>
        </div>
      </div>
    </>
  );
}
