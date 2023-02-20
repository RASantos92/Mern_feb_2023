import {useParams} from 'react-router-dom'
const EditDestination = (props) => {
    const {id} = useParams();
    return <h2>edit destination id : {id}</h2>
};

export default EditDestination;