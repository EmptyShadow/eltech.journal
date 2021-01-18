import React from 'react';
import { Table} from 'antd';

const columns = [
    {
        title: 'Задание',
        dataIndex: 'task',
        key: 'task',
    },
    {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'Срок сдачи',
        dataIndex: 'deadline',
        key: 'deadline',
    },
    {
        title: 'Группы',
        dataIndex: 'groups',
        key: 'groups',
    }
];

const dataSource = [
    {
        key: '1',
        task: 'Исследование систем',
        type: 'Курсовая работа',
        deadline: '10 октября',
        groups: 'ff'
    }
];

const CourseTable = () => {
    return (
        <Table columns={columns} dataSource={dataSource} />
    );
}

export default CourseTable;