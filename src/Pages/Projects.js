import {Outlet,Link} from "react-router-dom";

export function Projects(){
    return (
        <>
            <h3 style={{padding:'16px',margin:0}}> Projects <span style={{fontFamily:'fontLightRegular'}}>&#62;</span></h3>
            <hr></hr>
            <div style={{width:'70%',margin:'auto',marginTop:'80px'}}>
            <p>These are projects I have done :</p>
            <ul>
                <li><Link to="jokes">Jokes Generator</Link></li>
            </ul>
            
            </div>
            <Outlet/>
        </>
    );
}