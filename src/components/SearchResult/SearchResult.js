
import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Product from '../ProductsPage/Product/Product';

const SearchResult = ({ match }) => {
    let search = match.params.search;
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        db
            .collectionGroup('products')
            .where('name', '==', search)
            .onSnapshot(snapshot => (
                setSearchedProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, []);
    if (searchedProducts.length >= 1) {
        console.log(searchedProducts)
    }
    return (
        <div>
            <h1>Search Result</h1>

        </div>
    )
}

export default SearchResult

//<div>
//                {searchedProducts?.map(product => (
//                    <Product
//                        key={product.id}
//                        id={product.id}
//                        name={product.data.name}
//                        image={product.data.image}
//                        price={product.data.price}
//                        category={product.data.category}
//                    />
//                ))}
//            </div>
