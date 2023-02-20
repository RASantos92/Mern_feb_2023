import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const EditDestination = (props) => {

    const [formData, setFormData] = useState({})
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/destinations/"+id)
            .then(res => {
                setFormData(res.data);
            }).catch(err=> {
                console.log(err);
            })
    },[id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/destinations/"+ id, formData , {new:true})
            .then(res => {
                console.log(res);
                navigate('/destinations')
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

    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Destination</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Location</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="location"
                        value={formData.location}
                    />
                </div>
                {
                    errors?.location && (
                        <span className="text-danger">{errors.location?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Description</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="description"
                        value={formData.description}
                    />
                </div>
                {
                    errors?.description && (
                        <span className="text-danger">{errors.description?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Media URL</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="src"
                        value={formData.src}
                    />
                </div>
                {
                    errors?.src && (
                        <span className="text-danger">{errors.src?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Media Type</label>
                    <select 
                    name="srcType" 
                    type="text" 
                    onChange={handleOnChange}
                    className="form-control"
                    >
                        <option value="img">Image</option>
                        <option value="Google Maps Embed">Google Maps Embed</option>
                        <option value="Youtube Embed">Youtube Embed</option>
                    </select>
                </div>
                <hr />
                <h5>Travel Seasons</h5>
                <div className="form-check">
                    <input 
                    onChange={handleOnChange}
                    type="checkbox"
                    name="summer" 
                    className="form-check-input"
                    checked = {formData.summer}
                    />
                    <label className="h6 form-check-label">Summer</label>
                </div>
                <div className="form-check">
                    <input 
                    onChange={handleOnChange}
                    type="checkbox"
                    name="winter" 
                    className="form-check-input"
                    checked = {formData.winter}
                    />
                    <label className="h6 form-check-label">winter</label>
                </div>
                <div className="form-check">
                    <input 
                    onChange={handleOnChange}
                    type="checkbox"
                    name="fall" 
                    className="form-check-input"
                    checked = {formData.fall}
                    />
                    <label className="h6 form-check-label">Fall</label>
                </div>
                <div className="form-check">
                    <input 
                    onChange={handleOnChange}
                    type="checkbox"
                    name="spring" 
                    className="form-check-input"
                    checked = {formData.spring}
                    />
                    <label className="h6 form-check-label">Spring</label>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default EditDestination;