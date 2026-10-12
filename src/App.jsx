import { useEffect, useState } from "react"
import Card from "./components/Card"
import  GameHeader  from "./components/GameHeader"
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
import { GameOverMessage } from "./components/GameOverMessage";

const cardValues = [
  "🥝","🍌","🍊","🍒","🍎","🍍","🍇","🍓",
  "🥝","🍌","🍊","🍒","🍎","🍍","🍇","🍓"];

function App() {
 const  {cards, score, moves, isGameComplete, initializeGame, handleCardClick, isGameOver} = useGameLogic(cardValues)
  return (
    <div className="app">
     <GameHeader score={score} moves={moves} onReset={initializeGame}/>
     {isGameComplete && <WinMessage moves={moves}/>}
     {isGameOver && <GameOverMessage />}
     <div className="cards-grid">
      {cards.map((card, index)=>(
        <Card key={card.id} card={card} onClick={ handleCardClick }/>
      ))}
     </div>
    </div>
  )
}

export default App

