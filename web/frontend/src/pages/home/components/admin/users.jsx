import React from 'react';
import {Button, Table} from 'antd';

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        key: 'role'
    },
    {
        title: 'Группа',
        dataIndex: 'group',
        key: 'group',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email'
    }
];

const dataSource = [
    {
        key: '1',
        name: 'Бердникова Евгения Викторовна',
        role: 'Студент',
        group: '5302',
        email: 'asd@hdsjd.com'
    },
    {
        key: '2',
        name: 'Неботов Дмитрий Сергеевич',
        role: 'Студент',
        group: '5302',
        email: 'asd@hdsjd.com'
    },
    {
        key: '3',
        name: 'Ларин Роман Сергеевич',
        role: 'Студент',
        group: '5302',
        email: 'asd@hdsjd.com'
    },
    {
        key: '5',
        name: 'Кузьмин Сергей Алексеевич',
        role: 'Преподаватель',
        group: '-',
        email: 'asd@hdsjd.com'
    }
];

const Users = () => {
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            footer={() => <Button>Добавить пользователя</Button>}
        />
    );
}

export default Users;