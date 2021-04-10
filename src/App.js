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
import Footer from './components/Footer/Footer';
import PendingOrders from './components/PendingOrders/PendingOrders';
import SentOrders from './components/SendedOrders/SentOrders';
import OrderDetails from './components/OrderDetails/OrderDetails';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchResult from './components/SearchResult/SearchResult';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
    }, [dispatch])

    return (
        <Router>
            <div className="app">
                <Header />
                <div className="pageWrapper">
                    <ErrorBoundary>
                        <Switch >
                            <Route path="/search/:search" component={SearchResult} />
                            <Route path="/add-address"><AddAddress /></Route>
                            <Route path="/payment"><Payment /></Route>
                            <Route path="/register"><Register /></Route>
                            <Route path="/login"><Login /></Route>
                            <Route path="/addProduct"><AddProduct /></Route>
                            <Route path="/your-orders"><Orders /></Route>
                            <Route path="/pending-orders" ><PendingOrders /></Route>
                            <Route path="/sent-orders"><SentOrders /></Route>
                            <Route path="/contacts" ><Contacts /></Route>
                            <Route path="/about" ><About /></Route>
                            <Route path="/checkout" ><Checkout /></Route>
                            <Route path="/categories/:product" exact component={ProductsPage} />
                            <Route path="/categories/:product/:id" exact component={ProductDetails} />
                            <Route path="/orders/:order" exact component={OrderDetails} />
                            <Route path="/"><Home /></Route>
                        </Switch>
                    </ErrorBoundary>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
