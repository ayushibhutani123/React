import React, { useState } from "react";
import downloadImage from "../assets/download.png";
import offers from "../assets/offer.png";
import search from "../assets/search.png";
import sign from "../assets/signin.png";
import cart from "../assets/cart.png";
import help from "../assets/help.png";
import styles from "./Navbar.css";

export default function Navbar({data}) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const handleSearchClick = () => {
    setShowSearch(true);
  };
  console.log(searchInput);
  const handleInputChange = (event) => {
    const formattedInput = event.target.value.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with dashes and convert to lowercase
    setSearchInput(formattedInput); // Update searchInput state
    console.log(formattedInput);
    if (event.key === "Enter") {
      window.location.href = "https://www.swiggy.com/" + encodeURIComponent(formattedInput);
    }
  };
  
  
  
 
// const maparr=()=>{
//   data?.data?.cards[7]?.card.card.brands.map((ele)=>{
//     console.log(ele.text)
//   })
// }
// maparr();
console.log(data)

// console.log(data?.data?.cards[7]?.card?.card?.brands)
  return (
    <div className="body">
      <div className="nav">
        <img src={downloadImage} alt="Download" />
        <h2>Other</h2>
        <div className="offer-container">
          <img src={offers} alt="Offers" />
          <h2>Offers</h2>
        </div>
        <div className="offer-container">
          <img src={search} onClick={handleSearchClick} />
          <h2>Search</h2>
        </div>
        <div className="offer-container">
          <img src={help} />
          <h2>Help</h2>
        </div>

        <div className="offer-container">
          <img src={sign} />
          <h2>Sign in</h2>
        </div>
        <div className="offer-container">
          <img src={cart} />
          <h2>Cart</h2>
        </div>
      </div>
      <div className="search-container">
        {showSearch && (
          <>
            <input
              
              onKeyDown={handleInputChange}
              className="search"
              type="text"
              placeholder="Search for Restaurants and Food"
            />
            <h2 className="restaurants">Restaurants</h2>
          </>
        )}
      </div>
    </div>
  );
}
