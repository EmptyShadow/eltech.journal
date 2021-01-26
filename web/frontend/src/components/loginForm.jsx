import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

const LoginForm = (user, onEdit) => {

    return (
        <React.Fragment>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
            </div>
            <Form
                className={'form-login'}

                name="basic"
            >

                <Form.Item
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин',
                        },
                    ]}
                >
                    <Input
                        placeholder={'Логин'}
                    />
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
                    <Form.Item>
                        <Button onClick={onEdit} type="primary" htmlType="submit">
                            <Link to={'/statement'}>
                                Войти
                            </Link>
                        </Button>

                        <Link to={'/signup'} style={{margin: '0 10px'}}>
                            Зарегистрироваться
                        </Link>

                    </Form.Item>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
}

export default LoginForm;