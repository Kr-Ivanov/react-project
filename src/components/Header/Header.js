import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Navigation from './Navigation/Navigation';


function Header() {


    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="/logo.png" alt="" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <Navigation />
        </div>
    )
}

export default Header;
