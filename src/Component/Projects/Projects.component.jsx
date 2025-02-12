import ProjectsProps from "./ProjectProp.component";
import projectImg from '../ImageFolder/linktree.png.jpg';
import morecipeimg from '../ImageFolder/MorecipeImg.png.jpg'
import movieList from "../ImageFolder/movie-listing.PNG"
import gamePride from "../ImageFolder/gamePride.png"
import blogimage from '../ImageFolder/meta-bnb--png.jpg'
import sshProject from "../../Component/ImageFolder/ssh.png"
import mobilProject from "../../Component/ImageFolder/mobilProject.PNG"
import lexlance from "../../Component/ImageFolder/lexlanceImage.png"


const Projects =(props)=>{
  return (
    // <div className="Project-container">HELLO WORLD</div>
    <div className="Project-container">
      <ProjectsProps text ="mo-movie-listing is a movie listing app built using react and tailwind css. this application allows users get the list of all recent movies and information about each of the movie.
      the application is build on themoviedb."
        image = {movieList}
        github='https://github.com/IAMMORBOR/movie-list'
        link ='https://mo-movie-list.netlify.app/'
      />
      <ProjectsProps text ="Game pride  is an online gaming platform that allows user to play game, wagger or bet on a game and win more doing what they love. 
      this application is built using Typescript and Tailwind css ."
        image = {gamePride}
        github='https://github.com/gamepride-co/frontend-version'
        link ='https://gamepride.io/'
      />
      <ProjectsProps text="Mobil is mobile first E-learning Gaming platform for kids. its basically designed for Glo and Mtn subscribers.
       Mobil allows kids to play game and learn at the same time. Mobil games are subscription based"
          image= {mobilProject}
           github ='https://github.com/Loremexcellentiam/mobi-fe'
          link= 'http://games.9ijakids.com/'
        
      /> 
       <ProjectsProps text="Service School House is an E-learning platform that trains customer service professionals across all career stages. It offers various courses and modules, allows users to download certificates upon completion, and supports language switching (English, French, Portuguese)."
          //  image= {morecipeimg}
          //  github ='https://github.com/IAMMORBOR/classic-cheesecake-recipe.git'
          // link= 'https://morecipepage.netlify.app/'

          image= {sshProject}
           github ='https://github.com/Loremexcellentiam/ssh'
          link= 'http://sshdevsvr.serviceschoolhouse.com/'
        
      /> 
      <ProjectsProps text="Lexlance is a legal marketplace connecting clients with lawyers built with React(vite), Node, SCSS and CSS modules."
       image= {lexlance}
       github='https://github.com/Lexlance'
       link = 'https://lexlance.com/'
      />
      {/* <ProjectsProps text ="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure veritatis necessitatibus doloremque
       placeat temporibus! Iusto ipsam sed minima accusantium
       laborum delectus voluptatibus recusandae! Suscipit 
       voluptatem pariatur obcaecati, magnam vitae commodi."
        image = {projectImg}
        github='https://github.com/IAMMORBOR/Linktree-HNG-Stage-1-.git'
        link ='https://linktreebymo.netlify.app/'
      /> */}
      
    </div>

  ) 
 
}
export default Projects;