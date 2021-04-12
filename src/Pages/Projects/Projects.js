import {Outlet,Link} from "react-router-dom";
import styles from "./Projects.module.css"

export function Projects(){
    return (
        <div>
            {/* <h3 style={{padding:'16px',margin:0}}> 
                Projects 
                <span style={{fontFamily:'fontLightRegular'}}> &#62;</span>
            </h3>
            <p style={{padding:'16px',margin:0}}>These are projects I have done :</p> */}
            <div className={styles.container}>
                <div className={styles.project}>
                    <p className={styles.project__name}>JOKES GENERATOR</p>
                    <p className={styles.project__description}>Web application to make coders laugh by producing random coding jokes.</p>
                    <div className={styles.project__actions}>
                        <a className={styles.project__code} target='_blank' 
                        rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Jokes'>
                            VIEW CODE
                        </a>
                        <Link className={styles.project__demo} to="jokes" title="Jokes Generator">
                            LIVE DEMO
                        </Link>  
                    </div>              
                </div>

                <div className={styles.project}>
                    <p className={styles.project__name}>POMODORO TIMER</p>
                    <p className={styles.project__description}>Pomodoro Timer web application to increase time utilisation and productivity.</p>
                    <div className={styles.project__actions}>
                        <a className={styles.project__code} target='_blank' 
                        rel="noreferrer" href='https://github.com/joelantonyjoy/portfolio/tree/master/src/Pages/Projects/Pomodoro'>
                            VIEW CODE
                        </a>
                        <Link className={styles.project__demo} to="pomodoro" title="Pomodoro Timer">
                            LIVE DEMO
                        </Link>
                    </div>
                </div> 

            </div>
            <Outlet/>
        </div>
    );
}