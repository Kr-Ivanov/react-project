import './SearchResult.css';
import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import Product from '../ProductsPage/Product/Product';

const SearchResult = ({ match }) => {
    let search = match.params.search;
    search = search.toLowerCase();
    const [searchedProducts, setSearchedProducts] = useState([]);

    db.collection("products")
        .get()
        .then(querySnapshot => (
            setSearchedProducts(querySnapshot.docs.map((doc => ({
                id: doc.id,
                data: doc.data(),
            }))).filter(doc => doc.data.name.toLowerCase().includes(search)))
        ));



    console.log(searchedProducts);




    //b.collection("products")
    //   .get()
    //   .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //           if ((doc.data().name.toLowerCase()).includes(search.toLowerCase())) {
    //               result.push(doc.data())
    //           }
    //       })
    //   })
    //   .then(() => setSearchedProducts(result))

    return (
        <div>
            <div className="container">
                {searchedProducts?.map(product => (
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


