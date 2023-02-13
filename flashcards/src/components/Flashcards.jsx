import React from "react";
import flashcards from "../data/flashcards.json"
import "./Flashcards.module.css"

class Flashcards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flashcards : flashcards
        };
    }

    handleFlipCard(index) {
        const updatedFlashcards = this.state.flashcards.map((card, i) => {
            if(i === index){
                return {
                    ...card,
                    flipped: !card.flipped
                }
            }
            return card
        })
        this.setState({flashcards: updatedFlashcards})
    }

    render(){
        return (
            <div className="container">
                <header style={{textAlign : "center"}}>
                    <h1>Programming Flash Cards</h1>
                    <hr/>
                </header>

                <main className="flex-row flex-wrap">
                    {
                        this.state.flashcards.map((card, i) => {
                            const {category,flipped,back,front} = card;
                            return (
                                <>
                                    <section key={i} onClick={()=> {this.handleFlipCard(i)}}  className="card">
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
}

export default Flashcards;