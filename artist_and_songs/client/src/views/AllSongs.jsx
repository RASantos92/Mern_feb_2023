import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
const AllSongs = (props) => {
    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/songs")
            .then(res => {
                setAllSongs(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])


    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/songs/"+id)
            .then(res => {
                console.log(res);
                const filteredSongs = allSongs.filter((song) => {
                    return song._id !== id;
                });
                setAllSongs(filteredSongs);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="w-5 mx-auto text-center">
            <h2>All Songs</h2>
            {
                allSongs.map((song, i) => {
                    const {_id, title, above330} = song;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/songs/${_id}`}><h4>{title}</h4></Link>
                            <p>Above 330? : {above330 ? "yes" : "no"}</p>
                            <button onClick={()=>{handleDelete(_id)}} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                            <Link to={`/songs/${_id}/edit`}> 
                                <button className="btn btn-sm btn-outline-warning">Edit</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AllSongs;