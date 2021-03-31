import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, price, name, hideButton }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{name}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from basket</button>)}


            </div>
        </div>
    )
}

export default CheckoutProduct
