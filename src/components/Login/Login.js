import { Link } from "react-router-dom";
import { useState } from 'react';
import './Login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="/logo.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Login</h1>
                <form action="">
                    <h5>Username</h5>
                    <input type="text" value={username} onChange={e => setEmail(e.target.value)} />
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setEmail(e.target.value)} />
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

/**
 * <section class="login">
            <form action="#" method="post">
                <fieldset>
                    <legend>Login</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <span class="actions"></span>
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span class="actions"></span>
                            <i class="fas fa-key"></i>
                        </span>
                    </p>
                    <input class="button" type="submit" class="submit" value="Login" />
                </fieldset>
            </form>

            <h3>Don`t have account?</h3>
            <Link to="/register">
                <button>Register here</button>
            </Link>
            </section >
 *
 */
