import {Outlet,Link} from "react-router-dom";

export function Projects(){
    return (
        <div>
            <h3 style={{padding:'16px',margin:0}}> 
                Projects 
                <span style={{fontFamily:'fontLightRegular'}}> &#62;</span>
            </h3>
            <hr style={{height: '1px',color: 'black',
            backgroundColor: 'black',border: 'none'}}>
            </hr>
            <p style={{padding:'32px 32px 32px'}}>These are projects I have done :</p>
            <div style={{display:'block',width:'70%',minWidth:'288px',maxWidth:740,margin:'auto'}}>
                <div style={{padding:32,border:'1px solid white'}}>
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="jokes" title="Jokes Generator">
                    <p>Jokes Generator</p>
                    </Link>
                    <a target='_blank' rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Jokes'>View Code</a>
                </div>
                <div style={{padding:32,border:'1px solid white'}}>
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="pomodoro" title="Pomodoro Timer">
                    <p>Pomodoro Timer</p>
                    </Link>
                    <a target='_blank' rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Pomodoro'>View Code</a>
                </div> 
            </div>
            <Outlet/>
        </div>
    );
}