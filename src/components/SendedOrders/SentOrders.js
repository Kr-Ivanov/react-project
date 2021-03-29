import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import PendingOrder from '../PendingOrders/PendingOrder/PendingOrder';
import './SentOrders.css';

const SentOrders = () => {

    const [sentOrders, setSentOrders] = useState([]);

    useEffect(() => {
        db.collectionGroup('orders')
            .where('isSend', '==', true)
            .onSnapshot(snapshot => (
                setSentOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, []);

    if (sentOrders.length >= 1) {
        console.log(sentOrders)
    }

    return (
        <div>
            <h1>Sent Orders</h1>
            {sentOrders?.map(sentOrder => (
                <PendingOrder
                    key={sentOrder.id}
                    id={sentOrder.id}
                    amount={sentOrder.data.amount}
                    receiver={sentOrder.data.receiver}
                    isSend={sentOrder.data.isSend} />
            ))}
        </div>
    )
}

export default SentOrders
