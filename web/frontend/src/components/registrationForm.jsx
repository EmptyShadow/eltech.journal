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

const RegistrationForm = () => {
    return (
        <Form
            className={'form-reg'}
            {...layout}
            name="basic"
        >

            <Form.Item {...tailLayout}>
                <Title level={4}>Зарегистрироваться</Title>
            </Form.Item>

            <Form.Item
                label="Фамилия"
                name="surname"
                rules={[
                    {
                        required: true,
                        message: 'Введите фамилию!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Имя"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Введите имя!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Отчество"
                name="name"
                rules={[
                    {
                        required: false
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="E-mail"
                name="email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                        message: 'Введите e-mail!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
}

export default RegistrationForm;