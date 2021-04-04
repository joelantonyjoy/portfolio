import { useState } from "react";
import {Link} from 'react-router-dom';
import './jokes.css';
import laugh from '../../../sounds/laugh.wav';

export function Jokes() {
    const [setup,setSetup] = useState("Why did the Python data scientist get arrested at customs?");
    const [delivery,setDelivery] = useState("She was caught trying to import pandas!");
    const [loading,setLoading] = useState(false);
    const url = `https://v2.jokeapi.dev/joke/Programming?type=twopart`;
    
    function GetNewJoke(){
        setLoading(true);
        fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        setSetup(data.setup);
        setDelivery(data.delivery);
        setLoading(false);
        console.log(data.setup,data.delivery)})
        
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        
    }
var html;
    if(loading){
        html = <div style={{}}>
            <p>Loading...</p>
            </div>;
    } else {
        html = <div>
        <p className="setup">{setup}</p>
        <pre>
            .
            .
            .
            .
        </pre>
        <p className="delivery">{delivery}</p>
        <div id="player">
                <audio autoPlay hidden>
                    <source src={laugh} type="audio/wav" />
                    If you're reading this, audio isn't supported. 
                </audio>
            </div></div>;
    }
    return(
        <div style={{background:'teal', color:'white', minHeight:'88vh'}}>
        <h3 style={{padding:'16px',margin:0}}><Link className="links" to="/projects"> Projects </Link><span style={{fontFamily:'fontLightRegular'}}>&#62;</span><span> Jokes</span></h3>
            <hr style={{height: '1px',color: 'black',
            backgroundColor: 'black',border: 'none'}}></hr>
        <div className="container">
            <h1>MakeCoderLaugh</h1>
            <p>To put a smile on your face :)</p>
            <div style={{color:'black'}}  className="joke">
            {html}
        </div>
            {/* <audio style={{display:'none'}} controls src={laugh} autoPlay></audio> */}
            <button className="btn" onClick={GetNewJoke}>Haha! Make me laugh again <span>&#128514;</span></button>
        </div>
        </div>
    );
}