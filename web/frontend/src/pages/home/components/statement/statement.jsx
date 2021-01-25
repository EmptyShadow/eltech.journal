import React from 'react';
import { Layout, Menu } from "antd";

import '../../../../components/style.css';
import CourseTabs from "./courseTabs";
import {Route} from "react-router-dom";

const { Content, Sider } = Layout;

const Statement = () => {
    const courses = [
        {
            id: '1',
            name: 'Сетевое Web-программирование'
        },
        {
            id: '2',
            name: 'Технологии Искусственного интеллекта'
        }];
    const [selectedCourse, setSelectedCourse] = React.useState(courses[0])
    return (
        <Layout style={{height: '100%'}}>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={selectedCourse.id}
                    style={{height: '100%', borderRight: 0}}
                >
                    {courses.map((course) =>
                        <Menu.Item
                            onClick={() => setSelectedCourse(course)}
                            key={course.id}
                        >
                            {course.name}
                        </Menu.Item>)}

                </Menu>
            </Sider>
            <Content style={{margin: '20px 16px'}}>
                    <CourseTabs course={selectedCourse}/>
            </Content>
        </Layout>
    );
}

export default Statement;