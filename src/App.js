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


function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
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
                    <Route path="/yourOrders">
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
