import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Details from './Details/Details';
import './OrderDetails.css';

const OrderDetails = ({ match }) => {
    let orderId = (match.params.order);
    const [orderDetails, setOrderDetails] = useState([]);
    useEffect(() => {
        db
            .collectionGroup('orders')
            .where('id', "==", orderId)
            .onSnapshot(snapshot => (
                setOrderDetails(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, [orderId]);
    if (orderDetails !== undefined) {
        console.log(orderDetails);
    }
    return (
        <div>
            <h1>Order Details</h1>
            {orderDetails?.map(x => (
                <Details
                    key={x.id}
                    id={x.id}
                    amount={x.data.amount}
                    receiver={x.data.receiver}
                    address={x.data.address}
                    basket={x.data.basket}
                    isSend={x.data.isSend} />
            ))}
        </div>
    )
}

export default OrderDetails
