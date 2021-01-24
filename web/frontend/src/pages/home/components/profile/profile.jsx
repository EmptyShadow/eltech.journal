import React from 'react';
import { Card, Layout, Form, Input, Avatar, Button, Row } from "antd";
import { UserOutlined } from '@ant-design/icons';

import './profile.css';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 20,
    },
};

const Profile = () => {
    return (
        <Layout style={{height: '100vh'}} className={'profile'}>
            <Card
                style={{height: '100vh'}}
                title={'Описание профиля'}
            >
                <Form
                    {...layout}
                    className={'profile-info'}
                    name="basic"
                >
                    <Form.Item>
                        <Row justify="center">
                            <Avatar shape="square" size={120} icon={<UserOutlined/>}/>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label={'Фамилия'}
                        name={'surname'}
                        rules={[{required: true, message: 'Введите свою фамилию'}]}
                    >
                        <Input placeholder={'Фамилия'}/>
                    </Form.Item>
                    <Form.Item
                        label={'Имя'}
                        name={'name'}
                        rules={[{required: true, message: 'Введите свое имя'}]}
                    >
                        <Input placeholder={'Имя'}/>
                    </Form.Item>
                    <Form.Item
                        label={'Отчество'}
                    >
                        <Input placeholder={'Отчетсво'}/>
                    </Form.Item>
                    <Form.Item
                        label={'E-mail'}
                    >
                        <Input type={'email'} placeholder={'E-mail'}/>
                    </Form.Item>
                    <Form.Item
                        label={'Позиция'}
                    >
                        <Input disabled value={'Студент'}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={'Пароль'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Телефон"
                        rules={[{required: true, message: 'Please input your phone number!'}]}
                    >
                        <Input addonBefore={'+7'} style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Изменить данные
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    );
}

export default Profile;