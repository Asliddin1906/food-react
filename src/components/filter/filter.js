import {  useRef, useState } from "react";


import "./filter.css"


const Filter = (props) => { 
  const inputRef = useRef();
  const [cards, setFilteredCards]= useState();  

  const handleFilterSubmit = (evt) => {
    evt.preventDefault()

    const inputValue = inputRef.current.value;

      const filteredCards =cards.filter(card => card.strMeal.includes(inputValue))

      setFilteredCards(filteredCards);
  }
  return (
    <form onSubmit={handleFilterSubmit} method="get" className="filter" >
      <input ref={inputRef} type="search" placeholder="Search" className="filter-inp "/>
      <button className="btn search text-white">Search</button>
    </form> 

  )
};

export default Filter;