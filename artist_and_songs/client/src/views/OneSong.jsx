import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"

const OneSong = (props) => {
    const [song, setSong] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
            .then(res => {
                setSong(res.data);
            }).catch(err => {
                console.log(err);
            });
    })

    if(song === null){
        return <h1>Loading...</h1>
    }
    const {title, above330, youtubeMedia} = song;


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>Above 3:30? : {above330? "yes" : "no"}</p>
            <h5>Music Video</h5>
            <div className="mb-4">
                {
                    <iframe 
                    width="933" 
                    height="525" 
                    src={`https://www.youtube.com/embed/${youtubeMedia}`} 
                    title="Songs from Lookify"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                }
            </div>
        </div>
    )
};

export default OneSong;