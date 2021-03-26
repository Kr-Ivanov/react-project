import { useHistory } from 'react-router-dom';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from "../../../reducer";


function Subtotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const backToLogin = (e) => {
        history.push('/login')
    }

    const proceedToCheckout = (e) => {
        history.push('/add-address')
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {user
                ?
                <button onClick={proceedToCheckout}>Proceed to checkout</button>
                :
                <button onClick={backToLogin}> Please, Log in to finish your orders</button>
            }

        </div>
    )
}

export default Subtotal
