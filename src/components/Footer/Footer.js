import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Link className="footer__links" to="/about">
                <span>About</span>
            </Link>
            <Link className="footer__links" to="/contacts">
                <span>Contacts</span>
            </Link>

        </div>
    )
}

export default Footer
