import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';


const ProductDetails = ({ match }) => {
    let category = (match.params.product)
    let productId = (match.params.id);
    console.log(productId, category)
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        db
            .collectionGroup(category)
            .where('id', "==", productId)
            .onSnapshot(snapshot => (
                setProductDetails(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
    }, []);
    if (productDetails !== undefined) {
        console.log(productDetails);
    }

    return (
        <div className="product__details">
            <h1>Product details</h1>

        </div>
    )
}

export default ProductDetails
