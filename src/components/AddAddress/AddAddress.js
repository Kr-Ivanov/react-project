import './AddAddress.css'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        } else {
            toast.error('All fields must be filled!')
        }
    }

    return (


        <div className="address">
            <ToastContainer
                position='top-center'
            />
            <div className="address__container">
                <h1>Add Address</h1>
                <form >
                    <h5 >City</h5>
                    <input type="text" name="city" />
                    <h5 >Address</h5>
                    <input type="text" name="address" />
                    <h5 >First name</h5>
                    <input type="text" name="firstName" />
                    <h5 >Last name</h5>
                    <input type="text" name="lastName" />
                    <h5 >Phone number</h5>
                    <input type="text" name="phoneNumber" />
                    <button className="address__button-address" type="submit" onClick={add} >Submit address</button>
                </form>
            </div>

        </div>

    )
}

export default AddAddress
