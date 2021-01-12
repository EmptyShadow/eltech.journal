
import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from '../../components/loginForm';
import RegistrationForm from '../../components/registrationForm';

import "./auth.css";

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/signin" component={LoginForm} />
            <Route exact path="/signup" component={RegistrationForm} />
        </div>
    </section>
);

export default Auth;