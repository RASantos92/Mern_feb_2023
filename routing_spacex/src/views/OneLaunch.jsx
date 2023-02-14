import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
const OneLaunch = (props) => {
    const [launch, setLaunch] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://api.spacexdata.com/v5/launches/${id}`)
            .then((res) => {
                console.log(res.data)
                setLaunch(res.data)
                setIsLoading(false)
            }).catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }, [id])

    if (isLoading) {
        return <LoadingSpinner />
    }

    const { date_local, details, name } = launch;


    return (<div className="flex-col align-items-center text-center">
        <h2>{name}</h2>
        <h4>Date:</h4>
        <p>{date_local}</p>
        <h4>Details:</h4>
        <p>{details}</p>
        {
            launch.links?.flickr?.original?.map((url, i) => {
                return (
                    <img
                        key={i}
                        src={url}
                        alt="launch"
                        className="shadow-img rounded mb-md"
                        width="60%"
                    />
                )
            })
        }
        {
            launch.links?.article && (
                <iframe
                    title="Launch Article"
                    src={launch.links.article}
                    width="50%"
                    height="800"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            )
        }
    </div>)
};

export default OneLaunch;