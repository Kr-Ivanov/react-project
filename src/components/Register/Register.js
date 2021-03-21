import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <section class="register">
            <form action="#" method="post">
                <fieldset>
                    <legend>Register</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <span class="actions"></span>
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                    <p class="field">
                        <label for="username">Username</label>
                        <span class="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
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
                    <input class="button" type="submit" class="submit" value="Register" />
                </fieldset>
            </form>
            <h3>Already have account?</h3>
            <Link to="/login">
                <button>Login here</button>
            </Link>
        </section>
    )
}

export default Register
