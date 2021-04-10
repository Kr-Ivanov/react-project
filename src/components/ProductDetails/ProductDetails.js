import React, { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase/firebase';
import ProductDet from './ProductDet/ProductDet';
import { v4 as uuidv4 } from 'uuid';



const ProductDetails = ({ match }) => {
    let category = (match.params.product)
    let productId = (match.params.id);
    console.log(productId, category)
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        db
            .collectionGroup('products')
            .where('id', "==", productId)
            .onSnapshot(snapshot => (
                setProductDetails(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))
    }, [productId]);
    if (productDetails !== undefined) {
        console.log(productDetails);
    }

    return (
        <div className="product__details">

            <h1>Product details</h1>
            {productDetails?.map(x => (
                <ProductDet
                    key={uuidv4()}
                    id={x.id}
                    name={x.data.name}
                    image={x.data.image}
                    description={x.data.description}
                    price={x.data.price}
                    category={category}
                />
            ))}

        </div>
    )
}

export default ProductDetails
