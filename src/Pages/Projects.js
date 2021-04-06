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
            
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="jokes" title="Jokes Generator">
                    <div style={{padding:32,border:'1px solid white'}}>
                    Jokes Generator
                    </div>
                    </Link>
                    <Link style={{margin:8,textDecoration:'none',color:'red',fontSize:16}} to="pomodoro" title="Pomodoro Timer">
                    <div style={{padding:32,border:'1px solid white'}}>
                    Pomodoro Timer
                    </div>
                    </Link>
                
            </div>
            <Outlet/>
        </div>
    );
}