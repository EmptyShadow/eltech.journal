import React from 'react';
import {Tag, Table, Button} from 'antd';

const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Преподаватель',
        dataIndex: 'teacher',
        key: 'teacher',
    },
    {
        title: 'Семестр',
        dataIndex: 'semester',
        key: 'semester'
    },
    {
        title: 'Уровень',
        dataIndex: 'level',
        key: 'level'
    },
    {
        title: 'Отчетность',
        dataIndex: 'report',
        key: 'report',
        render: tags => (
            <>
                {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                        {tag}
                    </Tag>
                ))}
            </>
        ),
    }
];

const dataSource = [
    {
        key: '1',
        name: 'Сетевое Web-программирование',
        teacher: 'Кузьмин Сергей Алексеевич',
        semester: '3',
        level: 'Магистр',
        report: ['Лабораторные работы', 'Экзамен']
    },
    {
        key: '2',
        name: 'Технологии Искусственного интеллекта',
        teacher: 'Новакова Наталья Евгеньевна',
        semester: '3',
        level: 'Магистр',
        report: ['Лабораторные работы', 'Практические работы', 'Экзамен']
    }
];

const Courses = () => {
    const [visiblePopup, serVisiblePopup] = React.useState(false);

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            footer={() => <Button onClick={() => serVisiblePopup(true)}>Добавить курс</Button>}
        />
    );
}

export default Courses;