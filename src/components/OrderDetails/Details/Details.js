import { db } from "../../../utils/Firebase/firebase";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import { v4 as uuidv4 } from 'uuid';


const Details = ({ id, amount, receiver, address, basket, isSend }) => {
    const sendProducts = () => {
        db.collection('users')
            .doc(receiver)
            .collection('orders')
            .doc(id)
            .update({ 'isSend': true })
    }
    return (
        <div className='order__details-container'>
            <div>
                Order #{id}
            </div>

            <div>
                <h3>Receiver ID: {id}</h3>
                <h3>Receiver city: {address.city}</h3>
                <h3>Receiver address: {address.address}</h3>
                <h3>Receiver names: {address.firsName} {address.lastName}</h3>
            </div>
            <div>
                Order basket:
                {basket?.map(item => (
                <CheckoutProduct
                    key={uuidv4()}
                    id={item.id}
                    title={item.title}
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
