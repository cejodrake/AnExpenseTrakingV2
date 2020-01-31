import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/common/navBar';
import ReactDOM from "react-dom";

import NewExpenseComponent from './components/NewExpenseComponent';
import LogoutComponent from './components/LogoutComponent';
import BarSocialNetWork from './components/common/barSocialNetwork';
import Footer from './components/common/footer';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './services/authService';



const App = () => {

    const [user, setUser] = useState();

    const getInformationUser = async () => {
        const result = await getCurrentUser();
        setUser(result);

    }
    useEffect(() => {
        getInformationUser();
    })

    return (

        <React.Fragment>

            <ToastContainer />
            <NavBar user={user} />
            <main className="container">
                <Switch>
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/NewExpense" component={NewExpenseComponent} />
                    <Route path="/logout" component={LogoutComponent} />
                    <Route path="/register" component={RegisterComponent} />
                    <Redirect from="/" exact to="/login" />
                </Switch>
            </main>
            <BarSocialNetWork />
            <Footer />

        </React.Fragment>

    )
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
