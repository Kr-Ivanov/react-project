
import { Link } from 'react-router-dom';
import { db } from '../../../utils/Firebase/firebase';
import './PendingOrder.css';

const PendingOrder = ({ id, amount, receiver, isSend }) => {


    return (
        <div className="orders__div">
            <Link to={`/orders/${id}`}><h2>Order № {id}</h2></Link>

            <h2>order receiver: {receiver}</h2>
            <h2>Total: {amount}</h2>

        </div>
    )
}

export default PendingOrder
