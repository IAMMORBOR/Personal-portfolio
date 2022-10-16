import './Skills.style.scss';
import{ImCss3}from 'react-icons/im';
import{AiOutlineHtml5}from 'react-icons/ai';
import{IoLogoJavascript}from 'react-icons/io';
import{FaSass}from 'react-icons/fa';
import {GrReactjs}from 'react-icons/gr';
import {motion}from 'framer-motion'

const Skills =()=>{
    const AnimateFrom = { opacity: 0, x: -200 }
    const AnimateTo = { opacity: 1, x: 0 }
    const AnimateFrom1 = { opacity: 0, x: 600 }
    const AnimateTo1 = { opacity: 1, x: 0 }
    return(
        <section className="skill-section">
            <div className="skill-section--stack"> My stack </div>
            <div className='stack_section'>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ type:"spring", stiffness:120 }}>
                    <div className="skill-section__mystack">
                        <ImCss3 className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>CSS3</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{ type:"spring", stiffness:120 }}>
                    <div className="skill-section__mystack">
                     <AiOutlineHtml5 className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>HTML5</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom}
                    animate={AnimateTo}
                    transition={{type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <IoLogoJavascript className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>JAVASCRIPT </p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                         <FaSass className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>SASS</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <GrReactjs className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>REACT JS</p>
                </motion.div>
           </div>
        </section>
         
    )
}
export default Skills;