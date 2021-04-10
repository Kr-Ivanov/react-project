import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Product from './Product/Product';
import './ProductsPage.css'

const ProductsPage = ({ match }) => {

    const [products, setProducts] = useState([]);
    let category = (match.params.product);
    useEffect(() => {
        db
            .collectionGroup('products')
            .where('category', '==', category)
            .onSnapshot(snapshot => (
                setProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, [category]);
    if (products.length >= 1) {
        console.log(products)
    }


    return (
        <div className="home">
            {products?.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.data.name}
                    image={product.data.image}
                    price={product.data.price}
                    category={category}
                />
            ))}
        </div>
    );
}

export default ProductsPage
