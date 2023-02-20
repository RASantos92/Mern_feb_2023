import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

const OneDestination = (props) => {
    const [destination, setDestination] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/destinations/${id}`)
            .then(res => {
                setDestination(res.data);
            }).catch(err => {
                console.log(err);
            });
    })

    if (destination === null) {
        return <h1>Loading...</h1>
    }
    const { location, description, summer, winter, spring, fall, srcType, src } = destination;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{location}</h4>
            <p>{description}</p>
            <h5>Travel Seasons:</h5>
            <ul className="list-group mb-4">
                {summer && <li className="list-group-item">Summer</li>}
                {winter && <li className="list-group-item">Winter</li>}
                {spring && <li className="list-group-item">Spring</li>}
                {fall && <li className="list-group-item">Fall</li>}
            </ul>

            {srcType === "img" && (
                <img className="shadow rounded" width="100%" src={src} alt={location} />
            )}

            {
                srcType === "Google Maps Embed" && (
                    <iframe
                        title={description}
                        src={src}
                        width="100%"
                        height="800"
                        allowFullScreen=""
                        loading="lazy"
                        className="shadow rounded"
                    ></iframe>
                )
            }
            {
                srcType === "Youtube Embed" && (
                    <iframe
                        title={description}
                        src={src}
                        width="100%"
                        height="800"
                        allowFullScreen
                        loading="lazy"
                        className="shadow rounded"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                )
            }

        </div>
    )
};

export default OneDestination;