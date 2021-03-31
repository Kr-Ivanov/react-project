import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';
import { v4 as uuidv4 } from 'uuid';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <>
            <div className="checkout">
                <div className="checkout__left">
                    <div >
                        <h2 className="checkout__title">Your shopping basket</h2>

                    </div>

                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
            <div className="checkout__products">

                {basket.map((x) => (
                    <CheckoutProduct
                        key={uuidv4()}
                        id={x.id}
                        name={x.name}
                        image={x.image}
                        price={x.price} />
                ))}
            </div>

        </>



    )
}

export default Checkout
