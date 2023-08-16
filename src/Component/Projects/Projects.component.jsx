import ProjectsProps from "./ProjectProp.component";
import projectImg from '../ImageFolder/linktree.png.jpg';
import morecipeimg from '../ImageFolder/MorecipeImg.png.jpg'
import blogimage from '../ImageFolder/meta-bnb--png.jpg'
import serviceSchoolHouseProject from "../../Component/ImageFolder/service-school-house-project.PNG"
import mobilProject from "../../Component/ImageFolder/mobilProject.png"
const Projects =(props)=>{
  return (
    <div className="Project-container">
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
      <ProjectsProps text="Morecipe project is a devchallenge project that is designed to help
       user see :
    
       1. A recipe with ingredients and instructions
       2. Select a checkbox if I have the ingredients
       3. see the number of servings, baking times."
           image= {morecipeimg}
           github ='https://github.com/IAMMORBOR/classic-cheesecake-recipe.git'
          link= 'https://morecipepage.netlify.app/'
        
      /> 
    </div>

  ) 
 
}
export default Projects;