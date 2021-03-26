import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import ProductsPage from './components/ProductsPage/ProductsPage';
import AddProduct from './components/AddProduct/AddProduct';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { auth } from './utils/Firebase/firebase';
import { useStateValue } from './StateProvider';
import ADMINS from './utils/Admins/Admins';
import Payment from './components/Payment/Payment';
import AddAddress from './components/AddAddress/AddAddress';

function App() {

    const [{ }, dispatch] = useStateValue();

    useEffect(() => {

        auth.onAuthStateChanged(authUser => {

            if (authUser) {
                if (ADMINS.includes(authUser.email)) {
                    dispatch({
                        type: 'SET_ADMIN',
                        admin: authUser,
                    });

                } else {
                    dispatch({
                        type: 'SET_USER',
                        user: authUser,
                    });
                }
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
                dispatch({
                    type: 'SET_ADMIN',
                    admin: null,
                });
            }

        })
    }, [])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/add-address">
                        <Header />
                        <AddAddress />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Payment />
                    </Route>
                    <Route path="/register">
                        <Header />
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Header />
                        <Login />
                    </Route>
                    <Route path="/addProduct">
                        <Header />
                        <AddProduct />
                    </Route>
                    <Route path="/your-orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/categories/:product">
                        <Header />
                        <ProductsPage />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
