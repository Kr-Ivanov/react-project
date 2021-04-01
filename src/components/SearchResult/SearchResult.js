import './SearchResult.css';
import React, { useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Product from '../ProductsPage/Product/Product';

const SearchResult = ({ match }) => {
    let search = match.params.search;
    const [searchedProducts, setSearchedProducts] = useState([]);

    const regex = new RegExp(search, "gi");

    let result = [];
    db.collection("products")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (regex.test(doc.data().name)) {
                    result.push(doc.data())
                }
            })
        })
        .then(() => setSearchedProducts(result))

    return (
        <div>
            <div className="container">
                {searchedProducts?.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                    />
                ))}
            </div>

        </div>
    )
}

export default SearchResult


