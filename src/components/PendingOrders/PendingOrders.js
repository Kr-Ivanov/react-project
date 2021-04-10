import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import PendingOrder from './PendingOrder/PendingOrder';
import './PendingOrders.css';

const PendingOrders = () => {

    const [pendingOrders, setPendingOrders] = useState([]);

    useEffect(() => {
        db.collectionGroup('orders')
            .where('isSend', '==', false)
            .onSnapshot(snapshot => (
                setPendingOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, []);

    if (pendingOrders.length >= 1) {
        console.log(pendingOrders)
    }



    return (
        <div className="pendingOrders">
            <h1>Pending Orders</h1>
            {pendingOrders.length >= 1 ?
                pendingOrders.map(pendingOrder => (
                    <PendingOrder
                        key={pendingOrder.id}
                        id={pendingOrder.id}
                        amount={pendingOrder.data.amount}
                        receiver={pendingOrder.data.receiver}
                        isSend={pendingOrder.data.isSend} />
                ))
                : <h1>There are no pending orders</h1>
            }
        </div>
    )
}

export default PendingOrders
