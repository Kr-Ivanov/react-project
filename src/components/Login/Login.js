import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import { auth } from '../../utils/Firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.replace('/');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (


        <div className="login">
            <ToastContainer
                position='top-center'
            />
            <Link to="/">
                <img className="login__logo" src="/logo.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Login</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__button-login" type="submit" onClick={logIn}>Log in</button>
                    <p className="login__p">
                        Don`t have account?
                    </p>
                    <Link to="/register">
                        <button className="login__button-register">Register here</button>
                    </Link>

                </form>
            </div>


        </div>



    )
}

export default Login

