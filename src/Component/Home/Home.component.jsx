import './Home.style.scss'
import ButtonMailto from '../../Mail/Mail.component';
import About from '../About/About.component';





const Home =()=>{
        var MyDate =new Date();
        var Hour= MyDate.getHours();
        var greet;

        if (Hour < 12){
            greet='Morning'
        }else if (Hour > 12 && Hour < 18){
            greet= "Afternoon"
        }else{
            greet="Evening"
        }
    return(
       
       <div>
    
    <div className="Main-Section">
        <div className="Intro_section ">
            <h5 className="Intro_section--Sub">Hi Good{greet}, i'm</h5>
            <h1 className="Intro_section--Main"> Omobolanle Famotibe</h1>

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