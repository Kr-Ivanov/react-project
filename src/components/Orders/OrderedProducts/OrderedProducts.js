import React from 'react'

function OrderedProducts() {
    return (
        <div className="product">
            <div className="product__info">
                <p>{"Title"}</p>
                <p className="product__price">
                    <strong>{/**price */}лв.</strong>
                </p>
            </div>
            <img src="" alt="Some photo" />
            <p>{"X pcs."}</p>

        </div>
    )
}

export default OrderedProducts
