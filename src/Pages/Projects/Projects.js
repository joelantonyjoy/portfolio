import {Outlet,Link} from "react-router-dom";
import styles from "./Projects.module.css"
import projects from './projectsData.js';

export function Projects(){
    return (
        <div>
            <div className={styles.container}>
            {
                projects.map( project => {
                    let link;
                    if(!project.isExternalLink){
                        link = <Link className={styles.project__demo} to={project.projectLive} title={project.title}>
                            LIVE DEMO
                        </Link>
                    } else {
                        link = <a className={styles.project__demo} target='_blank' 
                        rel="noreferrer" href={project.projectLive} title={project.title}>
                            LIVE DEMO
                        </a>
                    }
                    return (
                    <div className={styles.project}>
                        <p className={styles.project__name}>{project.projectName}</p>
                        <p className={styles.project__description}>{project.projectDescription}</p>
                        <div className={styles.project__actions}>
                            <a className={styles.project__code} target='_blank' 
                            rel="noreferrer" href={project.projectCode}>
                                VIEW CODE
                            </a>
                            {link}
                        </div>
                    </div> );
                })
            }
            </div>
            <Outlet/>
        </div>
    );
}