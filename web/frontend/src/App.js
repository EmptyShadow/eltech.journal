import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import { Auth } from './pages';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route
                    exact
                    path={["/signin", "/signup"]}
                    component={Auth}
                />
                <Route
                    path="/"
                    render={() => <Redirect to="/signin" />}
                />
            </Switch>
        </div>
    );
}

export default App;
