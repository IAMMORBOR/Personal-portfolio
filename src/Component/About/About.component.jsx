import Skills from '../Skills/Skillscomponent';
import './About.style.scss';
import profileImg from '../ImageFolder/img.png.jpg';

const About =()=>{
   return(
       <>
           <div className='abt-section'>
                <div className='abt-section--img'>
                    <img className="abt-section--img__profile" src={profileImg} />
                </div> 
                <div className='abt-section--info'>
                    <h3 className="abt-section-heading">ABOUT ME</h3>
                    <p className='abt-section-heading__text'>
                     I'm a Web Developer based in Lagos, Nigerian. I focus on creating user‑friendly websites with preference to the React.js framework.
                     I am proficient in HTML and CSS also, and I have built some other simple projects with JavaScript and SASS.
                     I'm passionate and motivated in taking on any challenges. when building or cloning web projects,
                     I strongly adhere to Responsive Design, Great UI/UX & Accessibility and Reusable & minimal code principles which makes my websites both unique and scaleable.
                     In my spare time, I love to watch movies and Read.
                    </p>
                    <div className='cv_section'>
                     <a target='_blank' href='https://1drv.ms/b/s!ApVoLCMLSnQighMqpDtsKOmr3OFs' download='resume' className='cv_section__dwnload'>Download Resume</a>
                    </div>
                </div>
            </div>
           <Skills />
       </>
   )

   
}
export default About;


 {/* A software developer based in Nigeria. I enjoy creating things that live on the internet, wether that be websites, applications or anything between.

                My goal is to always build products that help solve tasks that can be automated and make life easier. I derive great joy in creating solutions to put smile on the faces of client.

                Here are a few technologies, I've been working with recently: */}
