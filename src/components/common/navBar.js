import React from 'react';
import { NavLink } from 'react-router-dom';
import MyBugetComponent from './bugetComponent';

const NavBar = ({ user }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >An Expense Tracker that care your MONEY</a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div className="navbar-nav ">
                    {!user && (
                        <React.Fragment>
                            <NavLink className="nav-item nav-link" to="/login"> Login   </NavLink>

                        </React.Fragment>)
                    }


                    {user && (
                        <React.Fragment>

                            <NavLink className="nav-item nav-link" to="/profile">
                                Welcome {user.name}
                            </NavLink>

                            <NavLink className="nav-item nav-link" to="/logout" >
                                Logout
                                </NavLink>
                        </React.Fragment>
                    )
                    }
                </div>


            </div>

            <div className="navbar-nav  navbar-nav-right">

                {
                    <React.Fragment>
                        <MyBugetComponent />
                    </React.Fragment>
                }
            </div>
        </nav>
    );
};

export default NavBar;
