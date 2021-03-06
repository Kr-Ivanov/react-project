import { useStateValue } from '../../StateProvider';
import './Payment.css';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from "../../reducer";
import { db } from '../../utils/Firebase/firebase';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const [{ basket, address, user }, dispatch] = useStateValue();
    const history = useHistory();

    const buy = (e) => {
        e.target.disabled = true;

        let order = db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc()

        order.set({
            basket: basket,
            address: address,
            amount: getBasketTotal(basket),
            receiver: user.uid,
            isSend: false,
            id: order.id,
        })
            .then(() => {
                dispatch({
                    type: 'EMPTY_BASKET'
                });
                history.replace('/');
            })
            .catch(error => toast.error(error.message));

    }

    return (
        <div className="payment">
            <ToastContainer
                position='top-center'
            />
            <div className="payment__container">
                <h1>Checkout({basket.length} items)</h1>
                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Delivery address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>City: {address.city}</p>
                        <p>Address: {address.address}</p>
                        <p>First name: {address.firstName}</p>
                        <p>Last name: {address.lastName}</p>
                        <p>Phone number: {address.phoneNumber}</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items:</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((x) => (
                            <CheckoutProduct
                                key={x.id}
                                id={x.id}
                                name={x.name}
                                image={x.image}
                                price={x.price} />
                        ))}
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment:</h3>
                    </div>
                    <div className="payment__details">
                        <p><strong> Order Total: ${getBasketTotal(basket)}</strong></p>
                        <button className="payment__details-button" onClick={buy} disabled={false}>Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
