import {useState} from "react"
import flashcards from "../data/flashcards.json"
const FlashcardsFunctional = (props) => {
    const [stateFlashcards,setFlashcards] = useState(flashcards);


    const handleFlipCard = (index) => {
        const updatedFlashcards = stateFlashcards.map((card, i) => {
            if(i === index){
                return {
                    ...card,
                    flipped: !card.flipped
                }
            }
            return card;
        })

        setFlashcards(updatedFlashcards)
    }

    return (
        <div className="container">
        <header style={{textAlign : "center"}}>
            <h1>Programming Flash Cards</h1>
            <hr/>
        </header>

        <main className="flex-row flex-wrap">
            {
                stateFlashcards.map((card, i) => {
                    const {category,flipped,back,front} = card;
                    return (
                        <>
                            <section key={i} 
                            onClick={()=> {handleFlipCard(i)}}  className="card">
                            <h3>{category}</h3>
                            {
                                flipped ? <p>{back}</p> : <p>{front}</p>
                            }
                            </section>
                        </>
                    )
                })
            }
        </main>
    </div>
    )
}

export default FlashcardsFunctional;