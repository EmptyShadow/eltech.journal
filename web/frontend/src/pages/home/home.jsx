import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

import './home.css';
import Statement from "./components/statement";

const { Header} = Layout;

const Home = (user) => {
    return (
    <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <Header className={'header'}>
                <Menu theme="dark" mode="horizontal" className={'menu'}>
                    <Menu.Item key={'1'}>
                        <Link to={'/statement'}>Ведомости</Link>
                    </Menu.Item>
                    <Menu.Item key={'2'}>
                        <Link to={'/account'}>Профиль</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Switch>
                <Route path={'/statement'}>
                    <Statement />
                </Route>
            </Switch>
        </Layout>
    </Router>
    );
}

export default Home;