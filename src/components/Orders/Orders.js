import React, { useEffect, useState } from 'react';
import './Orders.css';
import Order from './Order/Order'
import { db } from '../../utils/Firebase/firebase';
import { useStateValue } from '../../StateProvider';
import { v4 as uuidv4 } from 'uuid';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user.uid)
                .collection('orders')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                ));
        } else {
            setOrders([])
        }


    }, [user]);
    if (orders.length >= 1) {
        console.log(orders)
    }

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order key={uuidv4()} order={order} />
                ))}
            </div>


        </div>
    )
}

export default Orders
