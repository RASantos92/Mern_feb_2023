
import './App.css';
import CardFrom from './components/CardFrom';
import Flashcards from './data/flashcards.json';
import FlashcardsFunctional from './components/FlashcardsFunctional';
import {useState} from "react"

function App() {
  const [stateFlashcards,setFlashcards] = useState(Flashcards);

  const handleUpdate = (updatedCards) => {
    setFlashcards(updatedCards)
  }

  const handleCreate = (card) => {
    setFlashcards([card , ...stateFlashcards ])
  }

  const handleDelete = (updatedCards) => {
    setFlashcards(updatedCards);
  }


  return (
    <div>
      <CardFrom handleCreate = {handleCreate}/>
      <hr/>
      <FlashcardsFunctional propsFlashCards = {stateFlashcards}  handleUpdate = {handleUpdate} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
