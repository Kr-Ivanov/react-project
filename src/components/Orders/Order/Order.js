import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../Checkout/CheckoutProduct/CheckoutProduct';
import { v4 as uuidv4 } from 'uuid';
import './Order.css';

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p className="order__id"><small> № {order.id}</small></p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={uuidv4()}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType='text'
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order
