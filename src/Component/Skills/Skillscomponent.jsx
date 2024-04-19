import './Skills.style.scss';
import{ImCss3}from 'react-icons/im';
import{AiOutlineHtml5}from 'react-icons/ai';
import{IoLogoJavascript}from 'react-icons/io';
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
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
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <TbBrandNextjs className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>Next JS</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <SiTypescript className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>Typescript</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <FaNode className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>Node js</p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <SiTailwindcss className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>Tailwind </p>
                </motion.div>
                <motion.div className='skill-section--icon__container'
                    initial={AnimateFrom1}
                    animate={AnimateTo1}
                    transition={{ type:"spring", stiffness:120  }}>
                    <div className="skill-section__mystack">
                        <SiMui className='skill-section__icon ' />
                    </div>
                    <p className='skill-section__icon--text'>Material ui </p>
                </motion.div>
           </div>
        </section>
         
    )
}
export default Skills;