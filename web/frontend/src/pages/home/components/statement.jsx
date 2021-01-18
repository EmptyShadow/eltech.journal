import React from 'react';
import { Layout, Menu } from "antd";

import '../../../components/style.css';
import CourseTable from "./courseTable";

const { Content, Sider } = Layout;

const Statement = () => {
    return (
        <Layout style={{height: '100%'}}>
            <Sider width={200} className="site-layout-background"  >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <Menu.Item key="1">Курс 1</Menu.Item>
                    <Menu.Item key="2">Курс 2</Menu.Item>
                    <Menu.Item key="3">Курс 3</Menu.Item>
                    <Menu.Item key="4">Курс 4</Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ margin: '20px 16px' }}>
                <CourseTable />
            </Content>
        </Layout>
    );
}

export default Statement;