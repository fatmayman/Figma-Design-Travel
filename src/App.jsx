import React from 'react'
import './App.css'
import cardsData from './data/cardsData'
import TravelCard from './components/TravelCard'
import Header from './components/Header';


function App() {
  return (
    <div className="app-container">
            <Header />
      {cardsData.map((card, index) => (
        <TravelCard key={index} {...card} />
      ))}
    </div>
  )
}

export default App