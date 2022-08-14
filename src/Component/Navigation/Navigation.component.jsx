import {Outlet,Link} from 'react-router-dom';
import './Navigation.style.scss'
import MobileNav from './MobileNav.component';
import DeskNav from './DeskNav.component';
import '../../media-query/mediaquery.style.scss'

const Navigation = () => {
  return (
    <div className='Navigation'>
   <div className='Header'> 
          <div>
                <Link className='logo' to='/'>Morbor </Link>
            </div>
          
       
        <DeskNav />
        <MobileNav />
       </div> 
       <Outlet />
    </div>
     

  )
}


export default Navigation;