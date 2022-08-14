import { Link } from 'react-router-dom';
import './Mail.style.scss';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link className='link--btn'
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    )
        }

        export default ButtonMailto;