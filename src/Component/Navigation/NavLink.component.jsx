import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const NavLink = (props) => {
    const AnimateFrom = { opacity: 0, y: -40 }
    const AnimateTo = { opacity: 1, y: 0 }
    
    return (
        <nav className='Header_Nav'>
                <motion.div className='Nav-div'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ delay: 0.05 }}>
                   <Link className='Header_Nav_link'to='/About'
                        onClick={() => props.isMobileNav && props.CloseMobileNavMenu()}> About
                    </Link>
                </motion.div>

                <motion.div className='Nav-div'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ delay: 0.35 }}>
                    <Link className='Header_Nav_link' to='/Skills'
                        onClick={() => props.isMobileNav && props.CloseMobileNavMenu()}>Skills
                    </Link>
                </motion.div>

                <motion.div className='Nav-div'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ delay: 0.15 }}>
                    <Link className='Header_Nav_link' to='/Projects'
                        onClick={() => props.isMobileNav && props.CloseMobileNavMenu()}>Projects
                    </Link>
                </motion.div>

                <motion.div className='Nav-div'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ delay: 0.25 }}>
                    <Link className='Header_Nav_link' to='/Contact'
                        onClick={() => props.isMobileNav && props.CloseMobileNavMenu()}>Contact
                    </Link>
                </motion.div>

                

            </nav>
          
        
    )
}
export default NavLink