
import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from '../../components/loginForm';
import RegistrationForm from '../../components/registrationForm';

import "./auth.css";

const Auth = (user, onEdit) => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/signin" render={() => <LoginForm user={user} onEdit={onEdit} />} />
            <Route exact path="/signup" component={RegistrationForm} />
        </div>
    </section>
);

export default Auth;