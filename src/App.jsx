import React, { useState, useEffect } from 'react'
import "./App.css"

const App = () => {

  const [cards, setCards] = useState([]);

 const fetchData = async () =>{
  let a = await fetch("https://www.freetestapi.com/api/v1/movies")
  let data = await a.json();
  setCards(data);
  console.log(data)
 }

 useEffect(() => {
  fetchData();
 }, [])


  return (
    <div className='container'>
      <h1>The Movie App -</h1>
      {cards.map((cards) =>{
        return <div key={cards.id} className="cards">
          <h1>Title: {cards.title}</h1>
          <p>Year: {cards.year}</p>
          <p>Rating: 10 / {cards.rating}</p>
          <p>Awards : {cards.awards}</p>
          <p>Poster :</p>
          <img className='img' src={cards.poster} alt="poster" />

          <button type="button" class="btn btn-outline-primary">See More</button>
        </div>
      })}
      
    </div>
  )
}

export default App
