import {useState} from "react"
import flashcards from "../data/flashcards.json"
const FlashcardsFunctional = (props) => {
    const {propsFlashCards,handleUpdate, handleDelete, loading} = props




    const handleFlipCard = (index) => {
        const updatedFlashcards = propsFlashCards.map((card, i) => {
            if(i === index){
                return {
                    ...card,
                    flipped: !card.flipped
                }
            }
            return card;
        })

        handleUpdate(updatedFlashcards)
    }

    const handleDeleteCard = (e,index) => {
        e.stopPropagation()
        const updatedCards = propsFlashCards.filter((card,i) => i !== index)
        handleDelete(updatedCards)
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
        <header style={{textAlign : "center"}}>
            <h1>Programming Flash Cards</h1>
            <hr/>
        </header>

        <main className="flex-row flex-wrap">
            {
                propsFlashCards?.map((card, i) => {
                    const {category,flipped, correct_answer , question} = card;
                    return (
                        <>
                            <section key={i} 
                            onClick={()=> {handleFlipCard(i)}}  className="card">
                            <h3>{category}</h3>
                            {
                                flipped ? <p>{correct_answer}</p> : <p>{question}</p>
                            }
                            <button 
                            onClick={(e)=>{
                                handleDeleteCard(e,i)
                            }}>Delete</button>
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