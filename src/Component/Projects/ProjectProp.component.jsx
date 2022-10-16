import './project.style.scss';

import {AiFillGithub} from 'react-icons/ai'
import {TbWorld}from 'react-icons/tb'

const ProjectsProps= ({text, link, image, github})=>{
    return(
        <section className='Flip-Card-Containner'>
            <div className='Flip-card'>
                <div className='Flip-card_front'>
                    <img className="project-section__profile" src={image} />
                </div>
                <div className='Flip-card_back'>
                    <p className='project-section-info'>
                        {text}
                    </p> 
                    <div className='social-container'>
                        <a target='_blank' href={link} className='project-section__links'>
                            <TbWorld className='project-section__links-icon' />
                            <p className='project-section__links-icon--text'>
                                Vist website
                            </p>
                        </a>
                        <a target='_blank' href= {github}  className='project-section__links'>
                            <AiFillGithub className='project-section__links-icon' />
                            <p className='project-section__links-icon--text'>
                                Github
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section >
        
              

    )}

export default ProjectsProps;
 