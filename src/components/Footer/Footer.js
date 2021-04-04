import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <Link className="footer__links" to="/about">
                    <li><strong>About us</strong></li>
                </Link>
                <Link className="footer__links" to="/contacts">
                    <li><strong>Contacts</strong></li>
                </Link>

            </ul>


        </div>
    )
}

export default Footer
