
import './App.css';
import Flashcards from './components/Flashcards';
import FlashcardsFunctional from './components/FlashcardsFunctional';

function App() {
  return (
    <div>
      <Flashcards/>
      <FlashcardsFunctional test={"test"}/>
    </div>
  );
}

export default App;
