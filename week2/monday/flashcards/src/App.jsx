
import './App.css';
import CardFrom from './components/CardFrom';
import FlashcardsFunctional from './components/FlashcardsFunctional';
import { useState, useEffect } from "react"
import axios from 'axios'

function App() {
  const [stateFlashcards, setFlashcards] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("this useEffect runs everytime the component monts or re-renders");
    setLoading(true);
    setTimeout(() => {
      axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean")
        .then((res) => {
          console.log(res.data.results)
          setFlashcards(res.data.results)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }, 5000)
  }, [])

  const handleUpdate = (updatedCards) => {
    setFlashcards(updatedCards)
  }

  const handleCreate = (card) => {
    setFlashcards([card, ...stateFlashcards])
  }

  const handleDelete = (updatedCards) => {
    setFlashcards(updatedCards);
  }


  return (
    <div>
      <CardFrom handleCreate={handleCreate} />
      <hr />
      <FlashcardsFunctional propsFlashCards={stateFlashcards} loading={loading} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
