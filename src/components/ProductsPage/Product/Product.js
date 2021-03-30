import { useStateValue } from '../../../StateProvider';
import { Link } from 'react-router-dom';
import './Product.css';


function Product({ id, name, image, price, category }) {
    const [{ basket, admin }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                image: image,
                price: price,

            }
        });
    };
    return (
        <div className="product">

            <div className="product__info">
                <p>{name}</p>
                <p className="product__price">
                    <strong>${price}</strong>
                </p>
            </div>
            <Link className="product" to={`/categories/${category}/${id}`}>
                <img src={image} alt="Some photo" />
            </Link>
            {admin
                ? ''
                : <button onClick={addToBasket}>Add to Basket</button>
            }




        </div>
    )
}

export default Product
