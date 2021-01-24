import React from 'react';
import {Button, Table} from 'antd';

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Позиция',
        dataIndex: 'position',
        key: 'position'
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
        position: 'Студент',
        email: 'asd@hdsjd.com'
    },
    {
        key: '2',
        name: 'Неботов Дмитрий Сергеевич',
        position: 'Студент',
        email: 'asd@hdsjd.com'
    },
    {
        key: '3',
        name: 'Ларин Роман Сергеевич',
        position: 'Студент',
        email: 'asd@hdsjd.com'
    },
    {
        key: '5',
        name: 'Кузьмин Сергей Алексеевич',
        position: 'Преподаватель',
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