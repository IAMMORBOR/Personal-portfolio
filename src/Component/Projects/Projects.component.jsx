import ProjectsProps from "./ProjectProp.component";
import projectImg from '../ImageFolder/img1.png.jpg';
import morecipeimg from '../ImageFolder/MorecipeImg.png.jpg'
import blogimage from '../ImageFolder/BlogPostImg.png.jpg'
const Projects =(props)=>{
  return (
    <div className="Project-container">
      <ProjectsProps text="Padiimi app is a blogpost where user can write and delete a post post.
     firebase authentication was used here "
       image= {blogimage}
       github='https://github.com/IAMMORBOR/Blog-Post.git'
       link = 'https://padiimi.netlify.app'
      />
      <ProjectsProps text ="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure veritatis necessitatibus doloremque
       placeat temporibus! Iusto ipsam sed minima accusantium
       laborum delectus voluptatibus recusandae! Suscipit 
       voluptatem pariatur obcaecati, magnam vitae commodi."
        image = {projectImg}
        github='https://github.com/IAMMORBOR/Portfolio.git'
        link ='https://johnportfoliodesign.netlify.app'
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