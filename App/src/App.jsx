import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GamePic from '/GamePic.jpg'
import './App.css'
import axios from 'axios'
import Navigation from './Components/Navigation/Navigation.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [question, setQuestion] = useState('')
  const apiUrl = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean';

  async function fetchTrivia() {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      if (data.results && data.results.length > 0) {
        setQuestion(data.results[0].question);
      }
    } catch (error) {
      console.error("Error fetching trivia:", error);
    }
  }

  return (
    <>
      <Navigation />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <div className="card">
        <img className='max-w-60 m-auto mb-12' src={GamePic} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-80" onClick={fetchTrivia}>
          Give me a question
        </button>
        {question && <p><strong>Trivia Question: </strong>{question}</p>}
      </div>
    </>
  )
}

export default App
