import { useState } from "react"
const CardFrom = (props) => {
    const {handleCreate} = props;
    const [category, setCategory] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const handleNewCardSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            category : category, 
            question: front,
            correct_answer: back, 
            flipped : false
        }
        handleCreate(newCard)
        setCategory("");
        setFront("");
        setBack("");
    }

    return (
        <form onSubmit={handleNewCardSubmit}>
            <div>
                <label>Category</label>
                <input
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                    type="text"
                    value={category}
                ></input>
            </div>
            <div>
                <label>Front</label>
                <input
                    onChange={(e) => {
                        setFront(e.target.value)
                    }}
                    type="text"
                    value={front}
                ></input>
            </div>
            <div>
                <label>Back</label>
                <input
                    onChange={(event) => {
                        setBack(event.target.value)
                    }}
                    type="text"
                    value={back}
                ></input>
            </div>
            <input type="submit" value="add card" />
        </form>
    )
}

export default CardFrom