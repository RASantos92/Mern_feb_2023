import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditSong = (props) => {
    const [formData, setFormData] = useState({})
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/songs/" + id)
            .then(res => {
                setFormData(res.data);
            }).catch(err=> {
                console.log(err);
            })
    },[id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/songs/"+ id, formData , {new:true})
            .then(res => {
                console.log(res);
                navigate('/songs')
            }).catch(err => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
    }

    const handleOnChange = (e) => {
        if(e.target.type === "checkbox"){
            console.log(e.target.checked)
            setFormData({
                ...formData,
                [e.target.name] : e.target.checked
            })
        }else {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
        }
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Song</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="title"
                        value={formData.title}
                    />
                </div>
                {
                    errors?.title && (
                        <span className="text-danger">{errors.title?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Youtube Media (embeded code) </label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="youtubeMedia"
                        value={formData.youtubeMedia}
                    />
                </div>
                {
                    errors?.youtubeMedia && (
                        <span className="text-danger">{errors.youtubeMedia?.message}</span>
                    )
                }
                <div className="form-check">
                    <input 
                    onChange={handleOnChange}
                    type="checkbox"
                    name="above330" 
                    className="form-check-input"
                    checked={formData.above330}
                    />
                    <label className="h6 form-check-label">Above 3:30</label>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

export default EditSong;