import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
    const [user, setUser] = React.useState({
        id: Math.random(),
        surname: 'Петров',
        firstName: 'Петр',
        secondName: 'Петрович',
        role: 'teacher'
    })

    const onEdit = () => {
        setUser({
            id: Math.random(),
            surname: 'Петров',
            firstName: 'Петр',
            secondName: 'Петрович',
            role: 'student'
        })
    }

    return (
        <div className="app">
            <Switch>
                <Route
                    exact
                    path={["/signin", "/signup"]}
                    render={() => <Auth user={user} onEdit={onEdit} />}
                />
                <Route
                    exact
                    path="/statement"
                    render={() => user.id ? <Home user={user} /> : <Redirect to={'/signin'} />}
                />
                <Redirect from='/' to='/statement'/>
            </Switch>
        </div>
    );
}

export default App;
