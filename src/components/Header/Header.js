import { Link } from 'react-router-dom';
import './Header.css';

import Navigation from './Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';


function Header() {


    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="/logo.png" alt="" />
            </Link>

            <SearchBar />

            <Navigation />
        </div>
    )
}

export default Header;
