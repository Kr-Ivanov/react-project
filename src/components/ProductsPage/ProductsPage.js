import { Component } from 'react';
import Product from './Product/Product';

function ProductsPage() {


    return (
        <div className="home">
            <Product
                title="Daiwa Ninja 10 ft"
                price="30"
                image="/reels.png"
                id="123"
            />
        </div>
    );
}

export default ProductsPage
