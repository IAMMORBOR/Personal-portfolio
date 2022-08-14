import projectImg from '../ImageFolder/img1.png.jpg';
import './project.style.scss';
import { Link } from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {TbWorld}from 'react-icons/tb'

const Projects =()=>{
    return (
        <div>
            <div className='project-section'>
                <div className='image-container'>
                    <img className="project-section__profile" src={projectImg} />
                    <div className='project-links'>
                        <p className='project-section-info'>
                            PLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Reprehenderit,
                        </p>
                        <div className='project-section--social'>
                            <Link to='/' className='project-section__links'>
                                <div className='project-section__links--icon-sec'>
                                    <AiFillGithub className='project-section__links-icon' />
                                    <p className='project-section__links-icon--text'>
                                        Git hub
                                    </p>
                                </div>
                            </Link>
                            <Link to='/' className='project-section__links'>
                                <div className='project-section__links--icon-sec'>
                                    <TbWorld className='project-section__links-icon' />
                                    <p className='project-section__links-icon--text'>
                                        Visit Website
                                    </p>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
               
            </div>

            


        </div>
    )
}
export default Projects;