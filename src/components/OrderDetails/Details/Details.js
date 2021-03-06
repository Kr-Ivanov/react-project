import { db } from "../../../utils/Firebase/firebase";
import { useHistory } from 'react-router-dom';
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = ({ id, amount, receiver, address, basket, isSend }) => {
    const history = useHistory();
    const sendProducts = () => {
        db.collection('users')
            .doc(receiver)
            .collection('orders')
            .doc(id)
            .update({ 'isSend': true })
            .catch(error => toast.error(error.message));
        history.replace('/pending-orders');

    }
    return (
        <div className='order__details-container'>
            <ToastContainer
                position='top-center'
            />
            <div>
                Order #{id}
            </div>

            <div>
                <h3>Receiver ID: {receiver}</h3>
                <h3>Receiver city: {address.city}</h3>
                <h3>Receiver address: {address.address}</h3>
                <h3>Receiver names: {address.firstName} {address.lastName}</h3>
            </div>
            <div>
                Order basket:
                {basket?.map(item => (
                <CheckoutProduct
                    key={uuidv4()}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    hideButton
                />
            ))}
            </div>
            <div>
                Total ${amount}
            </div>
            <div>
                {isSend
                    ?
                    <span>This order is sent</span>
                    :
                    <button className="sendButton" onClick={sendProducts}>Send</button>
                }
            </div>

        </div>
    )
}

export default Details
