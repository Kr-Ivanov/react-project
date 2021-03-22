import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{ basket, user, admin }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="/logo.png" alt="" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                {admin
                    ? <div className="header__option">
                        <Link className="header__option" to="/addProduct" >
                            <span className="header__optionLineOne">Add</span>
                            <span className="header__optionLineTwo">Product</span>
                        </Link>
                    </div>
                    : ''
                }

                <div className="header__option">
                    <Link className="header__option" to="/login" >
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Log in</span>
                    </Link>
                </div>

                <div className="header__option">
                    <Link className="header__option" to="/yourOrders" >
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </Link>
                </div>

                <div className="header__optionCart">

                    <Link className="header__option" to="/checkout" >
                        <ShoppingCartIcon />

                        <span className="header__optionLineTwo header__cartCount">{basket.length}</span>
                    </Link >
                </div>

            </div>

        </div>
    )
}

export default Header;
