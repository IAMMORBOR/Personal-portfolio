import { Link } from "react-router-dom";
import ButtonMailto from "../../Mail/Mail.component";
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi';
import{ImWhatsapp} from 'react-icons/im';
import{GoLocation} from 'react-icons/go';


import './Contact.style.scss';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-section__heading">
                contact me
            </div>
            <div className="contact-section--text">
                Interested in working together? Feel free to get in touch with me.
                I am open to new opportunities and available for projects(short term and long term).
                Kindly reach out by saying hello
            </div>
            <div className="contact-section--contact">
                <div className="contact-section--mail">
                    <a className='contact-section__link' href="mailto:ofamotibe@gmail.com">
                        <div className="contact-section__icon_container">
                            <AiOutlineMail className="contact-section__icon" />
                        </div>
                        <p className="contact-section--mail__icon--text">
                            ofamotibe@gmail.com
                        </p>
                    </a>
                </div>
                <div className="contact-section--phone">
                    <a className='contact-section__link' href="tel:08164609847">
                        <div className="contact-section__icon_container">
                            <FiPhoneCall className='contact-section__icon' />
                        </div>
                        <p className="contact-section--mail__icon--text">
                            +234 81 6460 9847
                        </p>
                    </a>
                </div>
               
            </div>
            <footer className='footer_section'>
                Designed and Built by Famotibe Omobolanle © 2022. All Rights Reserved
            </footer>
        </section>
    )
}
export default Contact;