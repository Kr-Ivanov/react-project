import React from 'react'
import OrderedProducts from './OrderedProducts/OrderedProducts'

function Orders() {
    return (
        <div>
            <h1>List of your orders</h1>
            <OrderedProducts />
            <OrderedProducts />
            <OrderedProducts />
            <OrderedProducts />
        </div>
    )
}

export default Orders
