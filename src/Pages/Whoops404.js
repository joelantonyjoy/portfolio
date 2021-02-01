import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom'

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Really?</h1>
            <p>Looks like we cannot find any resource at {location.pathname}</p>
            <Link to="">Go home</Link>
        </div>
    );
}