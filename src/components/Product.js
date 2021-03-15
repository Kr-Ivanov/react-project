import React from 'react'
import './product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>{/*title */}</p>
                <p className="product__price">
                    <strong>{/**price */}лв.</strong>
                </p>
            </div>
            <img src="" alt="Some photo" />
            <button>Add to Basket</button>

        </div>
    )
}

export default Product
