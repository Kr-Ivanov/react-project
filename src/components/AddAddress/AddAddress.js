import './AddAddress.css'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
const AddAddress = () => {
    const history = useHistory();
    const [{ address }, dispatch] = useStateValue();


    const add = (e) => {
        e.preventDefault();

        if (e.target.parentNode.city.value !== '' &&
            e.target.parentNode.address.value !== '' &&
            e.target.parentNode.firstName.value !== '' &&
            e.target.parentNode.lastName.value !== '' &&
            e.target.parentNode.phoneNumber.value !== ''
        ) {
            dispatch({
                type: "ADD_ADDRESS",
                address: {
                    city: e.target.parentNode.city.value,
                    address: e.target.parentNode.address.value,
                    firstName: e.target.parentNode.firstName.value,
                    lastName: e.target.parentNode.lastName.value,
                    phoneNumber: e.target.parentNode.phoneNumber.value,
                }
            });
            history.push('payment');
        }
    }

    return (


        <div className="address">
            <form className="address__form">
                <label htmlFor="city">City</label>
                <input type="text" name="city" />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" />
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" />
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" name="phoneNumber" />
                <button type="submit" onClick={add} >Submit address</button>
            </form>
        </div>

    )
}

export default AddAddress
