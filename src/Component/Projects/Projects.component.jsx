import ProjectsProps from "./ProjectProp.component";
import projectImg from '../ImageFolder/linktree.png.jpg';
import morecipeimg from '../ImageFolder/MorecipeImg.png.jpg'
import blogimage from '../ImageFolder/meta-bnb--png.jpg'
import sshProject from "../../Component/ImageFolder/ssh.png"
import mobilProject from "../../Component/ImageFolder/mobilProject.PNG"


const Projects =(props)=>{
  return (
    <div className="Project-container">
      <ProjectsProps text="Mobil is an E-learning Gaming platform for kids. its basically designed for Glo and Mtn subscribers.
       Mobil allows kids to play game and learn at the same time. Mobil games are subscription based"
          image= {mobilProject}
           github ='https://github.com/Loremexcellentiam/mobi-fe'
          link= 'http://games.9ijakids.com/'
        
      /> 
       <ProjectsProps text="Service School house is an E-learning platform created to train customer service practionals in every organization.
       the application has different courses and module that fit into each customer service career stage. Its enables users download certificate at the end of the course.
       users have the previllege to switch between languages (English, French, Portugues)."
          //  image= {morecipeimg}
          //  github ='https://github.com/IAMMORBOR/classic-cheesecake-recipe.git'
          // link= 'https://morecipepage.netlify.app/'

          image= {sshProject}
           github ='https://github.com/Loremexcellentiam/ssh'
          link= 'http://sshdevsvr.serviceschoolhouse.com/'
        
      /> 
      <ProjectsProps text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure veritatis necessitatibus doloremque
       placeat temporibus! Iusto ipsam sed minima accusantium
       laborum delectus voluptatibus recusandae! Suscipit 
       voluptatem pariatur obcaecati, magnam vitae commodi "
       image= {blogimage}
       github='https://github.com/IAMMORBOR/MetaBNB--HNG-project.git'
       link = 'https://meta-bnb-mo-version.netlify.app'
      />
      <ProjectsProps text ="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure veritatis necessitatibus doloremque
       placeat temporibus! Iusto ipsam sed minima accusantium
       laborum delectus voluptatibus recusandae! Suscipit 
       voluptatem pariatur obcaecati, magnam vitae commodi."
        image = {projectImg}
        github='https://github.com/IAMMORBOR/Linktree-HNG-Stage-1-.git'
        link ='https://linktreebymo.netlify.app/'
      />
    </div>

  ) 
 
}
export default Projects;