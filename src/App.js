import React, { useState, lazy, Suspense } from 'react';

import ReactDOM from "react-dom";
import NewExpense from './components/NewExpense';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';

import { ToastContainer } from 'react-toastify';


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/common/navBar';
import BarSocialNetWork from './components/common/barSocialNetwork';
import Footer from './components/common/footer';
import { useEffect } from 'react';
import { getCurrentUser } from './services/authService';
import Logout from './components/Logout';



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
                    <Route path="/login" component={Login} />
                    <Route path="/NewExpense" component={NewExpense} />
                    <Route path="/logout" component={Logout} />
                    <Redirect from="/" exact to="/login" />
                </Switch>
            </main>
            <BarSocialNetWork />
            <Footer />
        </React.Fragment>

    )
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
