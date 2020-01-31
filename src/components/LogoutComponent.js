import React, { useEffect } from 'react'
import auth from '../services/authService';

const LogoutComponent = () => {

    useEffect(() => {
        auth.logout();
        window.location = "/"


    }, [])


    return (

        null
    )
}

export default LogoutComponent;