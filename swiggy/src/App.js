import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error loading data", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
    <Navbar data={data}/>
    </>
  );
}

