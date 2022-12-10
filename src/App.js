import { Route,Routes } from "react-router-dom";
 import About from "./Component/About/About.component";
import Projects from './Component/Projects/Projects.component.jsx'
import Contact from "./Component/Contact/Contact.component";
import Skills from "./Component/Skills/Skillscomponent";
import Navigation from "./Component/Navigation/Navigation.component";
import Home from "./Component/Home/Home.component";




function App() {

  return (
  
<Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
     <Route path="/Projects" element={<Projects/>}/>
     <Route path="/Skills" element={<Skills/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     
     </Route>
  </Routes>



  );

  
}



export default App;
