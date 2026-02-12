import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [ {"src": "/img/Ananas.png"},
                     {"src": "/img/Apfel.png"},
                     {"src": "/img/Erdbeere.png"},
                    {"src": "/img/Orange.png"},
                    {"src": "/img/Banane.png"},
                    {"src": "/img/Wassermelone.png"},
                    {"src": "/img/Zitrone.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //Mischen der Karten
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  // Auswahl
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  } 
  
  /*const [count, setCount] = useState(0)*/

  return (
    <div className='App'>
      <div>
          <h1> Memory Spiel</h1>
          <button onClick={shuffleCards}> Neues Spiel </button>

          <div className='card-grid'>
            {cards.map( card => (
              <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
            ))}
          </div>
      </div>
    </div>
  )
}

export default App
