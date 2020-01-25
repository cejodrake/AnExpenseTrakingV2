import React, { useState } from 'react';
import useInput from './common/useInput';
import useButton from './common/useButton';
import auth from '../services/authService';

import { toast } from 'react-toastify';

const Login = () => {

    const [userNameInput, setUserNameInput] = useState("");
    const [userPasswordInput, setUserPasswordInput] = useState("");
    const [buttonLogin, ButtonLogin] = useButton('Login', "", "submit");
    const [errors, setErrors] = useState("");

    const doSubmit = async () => {
        try {

            await auth.login(userNameInput, userPasswordInput) // I should create this service
            toast.info(" se autentico con exito ")
            window.location = '/newexpense'

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                // const errors = { ...this.state.errors };
                setErrors(ex.response.data);
                toast.error(errors);
            }
        }
        console.log(userPasswordInput, userNameInput)
    }

    return (
        <div className="container">
            <header>

            </header>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
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
                                        onChange={e => setUserNameInput(e.target.value)}
                                    />

                                </div>

                                <div className="form-group" >
                                    <label className="form-group">Password</label>
                                    <input
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        type="password"
                                        onChange={e => setUserPasswordInput(e.target.value)}
                                    />

                                </div>
                                <div>
                                    <ButtonLogin />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Login 