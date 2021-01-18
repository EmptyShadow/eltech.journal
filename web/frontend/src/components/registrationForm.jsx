import React from 'react';
import { Form, Input, Button } from 'antd';
import {Link} from "react-router-dom";

import './style.css';

const RegistrationForm = () => {
    return (
        <React.Fragment>
            <div className="auth__top">
                <h2>Регистрация</h2>
            </div>
            <Form
                className={'form-reg'}
                name="basic"
            >

                <Form.Item
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: 'Введите фамилию',
                        },
                    ]}
                >
                    <Input placeholder={'Фамилия'} />
                </Form.Item>

                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Введите имя',
                        },
                    ]}
                >
                    <Input placeholder={'Имя'} />
                </Form.Item>

                <Form.Item
                    name="second-name"
                    rules={[
                        {
                            required: false
                        },
                    ]}
                >
                    <Input placeholder={'Отчество'} />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Введите e-mail',
                        },
                    ]}
                >
                    <Input placeholder={'E-mail'} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Input.Password
                        placeholder={'Пароль'}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                    <Link to={'/signin'} style={{margin: '0 8px'}}>
                        Войти в существующий аккаунт
                    </Link>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
}

export default RegistrationForm;