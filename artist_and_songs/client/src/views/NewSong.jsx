import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const NewSong = (props) => {
    //variables
    const [formData, setFormData] = useState({
        title: "",
        youtubeMedia: "",
        above330: false,
    });
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    //functions
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/songs", formData)
            .then(res => {
                console.log(res);
                navigate('/songs')
            }).catch(err => {
                console.log(err.response?.data?.errors)
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
        } else {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
        }
    }

    // return jsx
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
                    />
                    <label className="h6 form-check-label">Above 3:30</label>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewSong;