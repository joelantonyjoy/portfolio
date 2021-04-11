import {Outlet,Link} from "react-router-dom";

export function Projects(){
    return (
        <div>
            <h3 style={{padding:'16px',margin:0}}> 
                Projects 
                <span style={{fontFamily:'fontLightRegular'}}> &#62;</span>
            </h3>
            <p style={{padding:'16px',margin:0}}>These are projects I have done :</p>
            <div style={{display:'block',width:'70%',minWidth:'288px',maxWidth:740,margin:'auto'}}>
                <div style={{background:'rgba(255,255,255,0.1)',padding:32,marginBottom:16}}>
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="jokes" title="Jokes Generator">
                    <p style={{margin:0}}>Jokes Generator</p>
                    </Link>
                    <p style={{margin:'0 0 32px'}}>Web application to make coders laugh by producing random coding jokes.</p>
                    <a style={{color:'red'}} target='_blank' rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Jokes'>View Code</a>
                </div>
                <div style={{background:'rgba(255,255,255,0.1)',padding:32,marginBottom:16}}>
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="pomodoro" title="Pomodoro Timer">
                    <p style={{margin:0}}>Pomodoro Timer</p>
                    </Link>
                    <p style={{margin:'0 0 32px'}}>Pomodoro Timer web application to increase time utilisation and productivity.</p>
                    <a style={{color:'red'}} target='_blank' rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Pomodoro'>View Code</a>
                </div> 
            </div>
            <Outlet/>
        </div>
    );
}