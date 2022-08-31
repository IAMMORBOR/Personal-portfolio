import projectImg from '../ImageFolder/img1.png.jpg';
import projectimg2 from '../ImageFolder/img2.png.jpg';
import './project.style.scss';
import ProjectSocial from './projectSocial.component';

const ProjectProp= (props)=>{
    return(
        <div className='Flip-Card-Containner'>
        <div className='Flip-card'>
            <div className='Flip-card_front'>
            <img className="project-section__profile" src={projectImg} />
            </div>
            <div className='Flip-card_back'>
                <p className='project-section-info'>
                     {props.text}
                </p>
                <div className='social-section'>
                    <ProjectSocial socialName ="Git Hub"/>
                </div>
            </div>
        </div>

    </div>
        

    )




}








        // <div className='image-container'>
        //             <div className='img-containner'>
        //                 <img className="project-section__profile" src={projectImg} />
        //             </div>
                 


        //             <div className='project-links'>
        //                 <p className='project-section-info'>
        //                    {props.text}
        //                 </p>
        //                 <div className='project-section--social'>
        //                     <Link to='/' className='project-section__links'>
        //                         <div className='project-section__links--icon-sec'>
        //                             <AiFillGithub className='project-section__links-icon' />
        //                             <p className='project-section__links-icon--text'>
        //                                 Git hub
        //                             </p>
        //                         </div>
        //                     </Link>
        //                     <Link to='/' className='project-section__links'>
        //                         <div className='project-section__links--icon-sec'>
        //                             <TbWorld className='project-section__links-icon' />
        //                             <p className='project-section__links-icon--text'>
        //                                 Visit Website
        //                             </p>
        //                         </div>

        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
               
    

export default ProjectProp;