import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Your shopping basket </h2>
                </div>
                {/**items */}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>


        </div>
    )
}

export default Checkout
