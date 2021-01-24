import React from 'react';
import {Layout, Menu} from "antd";
import Users from "./users";
import Courses from "./courses";

const { Content, Sider } = Layout;

const Admin = () => {
    const [isUsers, setIsUsers] = React.useState(true);

    return (
        <Layout style={{height: '100%'}}>
            <Sider width={200} className="site-layout-background"  >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['users']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <Menu.Item onClick={() => setIsUsers(true)} key="users">Пользователи</Menu.Item>
                    <Menu.Item onClick={() => setIsUsers(false)} key="courses">Курсы</Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ margin: '20px 16px' }}>
                {isUsers ? <Users /> : <Courses />}
            </Content>
        </Layout>
    );
}

export default Admin;