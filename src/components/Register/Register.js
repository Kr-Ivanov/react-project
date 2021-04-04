import "./Register.css";
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../utils/Firebase/firebase';

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const register = (e) => {
        e.preventDefault();

        if ((password === repeatPassword)) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth) {
                        history.replace('/login');
                    }
                })
                .catch(error => {
                    throw new Error(error.message)
                });
        } else {
            setPassword('');
            setRepeatPassword('');
            throw new Error('Passwords must match')
        }


    }

    return (
        <div className="register">
            <Link to="/">
                <img className="register__logo" src="/logo.png" alt="" />
            </Link>

            <div className="register__container">
                <h1>Register</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>Repeat password</h5>
                    <input type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
                    <button className="register__button-register" type="submit" onClick={register}>Register</button>
                    <p className="register__p">
                        Already have account?
                    </p>
                    <Link to="/login">
                        <button className="register__button-login">Log in here</button>
                    </Link>

                </form>
            </div>


        </div>
    )
}

export default Register
