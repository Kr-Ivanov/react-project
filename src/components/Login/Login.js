import { Link } from "react-router-dom"

function Login() {
    return (
        <section class="login">
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
        </section>
    )
}

export default Login
