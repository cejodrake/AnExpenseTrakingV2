import React, { useState } from 'react';
import useButton from './common/useButton';
import { register } from '../services/userService';

import { toast } from 'react-toastify';
import useSpinner from './common/useSpinner';


const RegisterComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("***");
    const [name, setName] = useState("");
    const [registerButton, RegisterButton] = useButton("Register", "", "submit")
    const [errors, setErrors] = useState();

    const [spinner, showSpinner, hideSpinner] = useSpinner();
    const doSubmit = async () => {

        const infoNewUser = addUser(email, password, name);

        try {

            await register(infoNewUser); // I should create this service
            showSpinner();
            window.location = '/login'

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors(ex.response.data);

                toast.error(errors);
            }
        }

    }

    if (spinner) {
        return <div className="container">{spinner}</div>
    };


    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Register</h5>
                            <form className="form-signin" onSubmit={e => {
                                e.preventDefault();
                                doSubmit();
                            }}>
                                <div className="form-group" >
                                    <label>Email Address</label>
                                    <input
                                        name="username"
                                        id="username"
                                        className="form-control"
                                        onChange={e => setEmail(e.target.value)}
                                    />

                                </div>

                                <div className="form-group" >
                                    <label className="form-group">Password</label>
                                    <input
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        type="password"
                                        onChange={e => setPassword(e.target.value)}
                                    />


                                </div>
                                <div className="form-group" >
                                    <label className="form-group">Name</label>
                                    <input
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        type="text"
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <RegisterButton />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

const addUser = (email, password, name) => {
    return {
        email,
        password,
        name
    }
}

export default RegisterComponent;