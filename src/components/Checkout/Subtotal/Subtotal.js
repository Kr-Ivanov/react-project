import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from "@material-ui/icons";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                    <strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
