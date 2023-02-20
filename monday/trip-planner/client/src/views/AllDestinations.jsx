import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"

const AllDestinations = (props) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/destinations")
            .then(res => {
                setDestinations(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])

    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/destinations/"+id)
            .then(res => {
                console.log(res);
                const filteredDestinations = destinations.filter((destination) => {
                    return destination._id !== id;
                });
                setDestinations(filteredDestinations);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="w-5 mx-auto text-center">
            <h2>Travel Destinations</h2>
            {
                destinations.map((destination, i) => {
                    const {_id, location,description, summer, winter,spring, fall} = destination;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/destinations/${_id}`}><h4>{location}</h4></Link>
                            <p>{description}</p>
                            <h5>Travel Seasons:</h5>
                            <ul className="list-group">
                                {summer && <li className="list-group-item">Summer</li>}
                                {winter && <li className="list-group-item">Winter</li>}
                                {spring && <li className="list-group-item">Spring</li>}
                                {fall && <li className="list-group-item">Fall</li>}
                            </ul>
                            <button onClick={()=>{handleDelete(_id)}} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                            <Link to={`/destinations/${_id}/edit`}> 
                                <button className="btn btn-sm btn-outline-warning">Edit</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AllDestinations;