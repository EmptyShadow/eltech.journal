import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

import './form.css';

    const { Title } = Typography;

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 8,
        },
    };

const LoginForm = () => {

    return (

        <Form
            className={'form-login'}
            {...layout}
            name="basic"
        >
            <Form.Item {...tailLayout}>
                <Title level={4}>Войти в аккаунт</Title>
            </Form.Item>

            <Form.Item
                label="Логин"
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Введите логин!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>

                    <Button style={{ margin: '0 8px' }}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;