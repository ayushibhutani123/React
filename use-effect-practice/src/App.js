import React, { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=2223bd7ff83bc8077c12c39cd972088d"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weather = await response.json();
        setState(weather.list);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, []); 

  console.log(state, "dd");

  return (
    <>
      <div>
        <h2>Weather Api Content</h2>
        <div>
          {state.map((item, index) => (
            <div key={index}>{item.dt}</div>
          ))}
        </div>
      </div>
    </>
  );
}
