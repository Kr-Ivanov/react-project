import { Component } from 'react';
import Product from './Product/Product';

class ProductsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home">
                <div className="product">
                    <div className="product__info">
                        <p>{"Product 1"}</p>
                        <p className="product__price">
                            <strong>{15}лв.</strong>
                        </p>
                    </div>
                    <img src="" alt="Some photo" />
                    <button>Add to Basket</button>

                </div>

                <div className="product">
                    <div className="product__info">
                        <p>{"product 2"}</p>
                        <p className="product__price">
                            <strong>{25}лв.</strong>
                        </p>
                    </div>
                    <img src="" alt="Some photo" />
                    <button>Add to Basket</button>

                </div>

                <div className="product">
                    <div className="product__info">
                        <p>{"product 3"}</p>
                        <p className="product__price">
                            <strong>{30}лв.</strong>
                        </p>
                    </div>
                    <img src="" alt="Some photo" />
                    <button>Add to Basket</button>

                </div>
            </div>
        )
    }

}

export default ProductsPage
