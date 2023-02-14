import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

const Launches = (props) => {
    const [launches, setLaunches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios.get("https://api.spacexdata.com/v4/launches")
                .then((res) => {
                    const launchesWithImages = res.data.filter((launch) => {
                        return launch.links.flickr.original.length > 0;
                    })
                    console.log(launchesWithImages);
                    setLaunches(launchesWithImages)
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err)
                    setIsLoading(false);
                })
        }, 1000)

    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="flex-col align-items-center text-center">
            {
                launches.map((launch, i) => {
                    const { date_local, id, name } = launch;
                    return (
                        <div
                            className="w-25pct mb-md shadow rounded" key={i}>
                            <Link to={`/launches/${id}`}>
                                <h2>{name}</h2>
                            </Link>
                            <p>Date: {date_local}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Launches;