import { useLocation } from "react-router-dom"; 
import {useNavigate} from 'react-router-dom';

const SpecificRequest =()=>{
    const keys = ["first_name", "location"]
    const location=useLocation()
    const navigate=useNavigate()
    const requestId=location.pathname.split("/")[1]
    return(
        <div>
            SpecificRequest
            <button>Deny</button>
            <button>Accept</button>
        </div>
    )
}
export default SpecificRequest;