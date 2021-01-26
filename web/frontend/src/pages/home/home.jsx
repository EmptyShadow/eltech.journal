import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

import './home.css';
import Statement from "./components/statement/statement";
import Profile from "./components/profile/profile";
import Admin from "./components/admin/admin";

const { Header} = Layout;

const Home = ({user}) => {
    return (
    <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <Header className={'header'}>
                <Menu theme="dark" mode="horizontal" className={'menu'} defaultSelectedKeys={['2']}>
                    {user.role === 'teacher' && <Menu.Item key={'1'}>
                        <Link to={'/admin'}>Управление</Link>
                    </Menu.Item>}
                    <Menu.Item key={'2'}>
                        <Link to={'/statement'}>Ведомости</Link>
                    </Menu.Item>
                    <Menu.Item key={'3'}>
                        <Link to={'/profile'}>Профиль</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Switch>
                <Route path={'/profile'}>
                    <Profile />
                </Route>
                <Route exact path={'/statement'}>
                    <Statement role={user.role} />
                </Route>
                <Route path={'/admin'}>
                    <Admin />
                </Route>
            </Switch>
        </Layout>
    </Router>
    );
}

export default Home;