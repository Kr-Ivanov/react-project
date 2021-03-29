import { Link, useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../utils/Firebase/firebase';


function Navigation() {
    const [{ basket, user, admin }, dispatch] = useStateValue();
    const history = useHistory();
    const logout = () => {
        auth.signOut()
            .then(() => history.replace('/login'))
    }
    return (
        <>
            {admin
                ?
                <div className="header__nav">
                    <div className="header__option">
                        <Link className="header__option" to="/addProduct" >
                            <span className="header__optionLineOne">Add</span>
                            <span className="header__optionLineTwo">Product</span>
                        </Link>
                    </div>
                    <div className="header__option">
                        <Link className="header__option" to="/pending-orders" >
                            <span className="header__optionLineOne">Pending</span>
                            <span className="header__optionLineTwo">Orders</span>
                        </Link>
                    </div>
                    <div className="header__option">
                        <Link className="header__option" to="/sent-orders" >
                            <span className="header__optionLineOne">Sent</span>
                            <span className="header__optionLineTwo">Orders</span>
                        </Link>
                    </div>
                    <div className="header__option">
                        <Link className="header__option" to="/" onClick={logout} >
                            <span className="header__optionLineOne">Hello, {admin.email}</span>
                            <span className="header__optionLineTwo">Log out</span>
                        </Link>
                    </div>
                </div>
                :
                <div className="header__nav">

                    <div className="header__option">
                        {user
                            ?
                            <Link className="header__option" to="/" onClick={logout} >
                                <span className="header__optionLineOne">Hello, {user.email}</span>
                                <span className="header__optionLineTwo">Log out</span>
                            </Link>
                            :
                            <Link className="header__option" to="/login" >
                                <span className="header__optionLineOne">Hello, Guest</span>
                                <span className="header__optionLineTwo">Log in</span>
                            </Link>
                        }
                    </div>

                    {user
                        ?
                        <div className="header__option">
                            <Link className="header__option" to="/your-orders" >
                                <span className="header__optionLineOne">Your</span>
                                <span className="header__optionLineTwo">Orders</span>
                            </Link>
                        </div>
                        :
                        ''
                    }

                    <div className="header__optionCart">

                        <Link className="header__option" to="/checkout" >
                            <ShoppingCartIcon />

                            <span className="header__optionLineTwo header__cartCount">{basket.length}</span>
                        </Link >
                    </div>

                </div>
            }

        </>
    )
}

export default Navigation
