import { Link } from "react-router-dom"
import {AiFillGithub} from 'react-icons/ai'
import {TbWorld}from 'react-icons/tb'
import './project.style.scss'

const ProjectSocial = (props) => {
    return (
    <div className="social-container">
        <Link to='/' className='project-section__links'>
            <div className='project-section__links--icon-sec'>
                <AiFillGithub className='project-section__links-icon' />
                <p className='project-section__links-icon--text'>
                   {props.socialName}
                </p>
            </div>
        </Link>
        <Link to='https://nexterdesign.netlify.app' className='project-section__links'>
                            <div className='project-section__links--icon-sec'>
                                   <TbWorld className='project-section__links-icon' />
                               <p className='project-section__links-icon--text'>
                                       Visit Website
                               </p>
                               </div>
                           </Link>
    </div>
    )
}
export default ProjectSocial;