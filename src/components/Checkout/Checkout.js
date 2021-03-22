import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

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
                        id={x.id}
                        title={x.title}
                        image={x.image}
                        price={x.price} />
                ))}
            </div>

        </>



    )
}

export default Checkout
