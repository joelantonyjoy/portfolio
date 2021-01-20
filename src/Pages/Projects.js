import {Outlet,Link} from "react-router-dom";

export function Projects(){
    return (
        <div style={{background:'orange',height:'100vh'}}>
            <h3 style={{padding:'16px',margin:0}}> 
                Projects 
                <span style={{fontFamily:'fontLightRegular'}}>&#62;</span>
            </h3>
            <hr style={{height: '1px',color: 'black',
            backgroundColor: 'black',border: 'none'}}>
            </hr>
            <div style={{width:'70%',margin:'auto',marginTop:'80px'}}>
            <p>These are projects I have done :</p>
            <ul>
                <li>
                    <Link style={{textDecoration:'none',color:'white',fontSize:24}} to="jokes">
                        Jokes Generator
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link style={{textDecoration:'none',color:'white',fontSize:24}} to="pomodoro">
                        Pomodoro Timer
                    </Link>
                </li>
            </ul>
            </div>
            <Outlet/>
        </div>
    );
}