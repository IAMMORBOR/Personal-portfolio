import './Home.style.scss'
import ButtonMailto from '../../Mail/Mail.component';
import About from '../About/About.component';




const Home =()=>{

    return(
       
       <div>
    
    <div className="Main-Section">
        <div className="Intro_section ">
            <h5 className="Intro_section--Sub">Hi There, i'm</h5>
            <h1 className="Intro_section--Main"> Omobolanle Famotibe</h1>
            
            {/* <div className="Intro_section--proffession">
            <Typewriter onInit={(typewriter)=>{
                typewriter.typeString('Frontend Developer')
                .pauseFor(1000)
                 .deleteAll()
                 .typeString('God help me')
                .start();
            }}  />
            </div> */}
           
             <h4 className="Intro_section--proffession">Frontend Developer</h4>
            <div className='btn'>
           <ButtonMailto className="Intro_section--btn" label ='Get in touch'mailto ='mailto:ofamotibe@gmail.com'/>
             </div>
        </div>
        
    <img src="https://res.cloudinary.com/dejiabiola/image/upload/v1607804394/envato_2.0/kem-hero.png" alt="hero"/>
    
 </div>

<About/>

 </div>
 



     )
   
}
export default Home;