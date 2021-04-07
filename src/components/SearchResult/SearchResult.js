import './SearchResult.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Product from '../ProductsPage/Product/Product';

const SearchResult = ({ match }) => {

    const [search, setSearch] = useState(`${match.params.search}`)
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    if (search !== match.params.search) {
        setSearch(match.params.search)
    }
    useEffect(() => {
        db.collection('products')
            .get()
            .then(querySnapshot => (
                setAllProducts(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: (doc.data()),
                })))
            ))
    }, [])

    useEffect(() => {
        setFilteredProducts(allProducts.filter(product => {
            return product.data.name.toLowerCase().includes(search.toLowerCase())
        }))

    }, [allProducts, search])


    return (
        <div>
            <div className="container">
                {filteredProducts?.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.data.name}
                        image={product.data.image}
                        price={product.data.price}
                        category={product.data.category}
                    />
                ))}
            </div>

        </div>
    )
}

export default SearchResult


