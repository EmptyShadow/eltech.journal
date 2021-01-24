import React from 'react';
import {Button, DatePicker, Form, Input, Modal, Select, Space, Table, Tag} from "antd";
import moment from "moment";

const { Option } = Select;
const dateFormat = 'DD.MM.YYYY';
const children = ['5301', '5302', '5303', '5304', '5306', '5307', '5308'];

const CoursesTable = () => {
    const columnsTask = [
        {
            title: 'Задание',
            dataIndex: 'task',
            key: 'task',
        },
        {
            title: 'Тип',
            dataIndex: 'type',
            key: 'type',
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
            render: tags => (
                <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </>
            ),

        },
        {
            title: 'Действия',
            key: 'action',
            render: (data) => (
                <Space size="middle">
                    <a onClick={() => onDelete(data)} key={'delete'}>Удалить</a>
                </Space>
            ),
        },
    ];
    const [dataSourceTask, setDataSourceTask] = React.useState([
        {
            key: '1',
            task: 'Исследование систем',
            type: 'Курсовая работа',
            deadline: '10.01.2021',
            groups: ['5301']
        },
        {
            key: '2',
            task: 'Лабораторная работа',
            type: 'Лабораторная работа',
            deadline: '14.01.2021',
            groups: ['5301', '5302']
        }
    ]);
    const [isCreateVisible, setIsCreateVisible] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState({
        key: '',
        task: '',
        type: '',
        deadline: '',
        groups: []
    });

    const onDelete = (data) => {
        setDataSourceTask(dataSourceTask.filter(item => item.key !== data.key));
    }

    const onCreate = () => {
        setSelectedTask({
            ...selectedTask,
            key: Math.random()
        });

        setDataSourceTask([...dataSourceTask, selectedTask]);
        setSelectedTask({
                key: '',
                task: '',
                type: '',
                deadline: '',
                groups: []
            }
        )
        setIsCreateVisible(false);
    }

    const handleInputName = (event) => {
        setSelectedTask({
            ...selectedTask,
            task: event.target.value
        });
    }

    const handleSelect = (value) => {
        setSelectedTask({
            ...selectedTask,
            type: value
        });
    }

    const handleDate = (date, dateString) => {
        setSelectedTask({
            ...selectedTask,
            deadline: dateString
        });
    }

    const handleGroupSelect = (value) => {
        setSelectedTask({
            ...selectedTask,
            groups: value
        });
    }
    return (
        <React.Fragment>
            <Table
                columns={columnsTask}
                dataSource={dataSourceTask}
                bordered
                footer={() => <Button onClick={() => setIsCreateVisible(true)}>Добавить задание</Button>}
            />
            {isCreateVisible &&
            <Modal title={'Новое задание'}
                   visible={isCreateVisible}
                   onCancel={() => setIsCreateVisible(false)}
                   footer={
                       [
                           <Button key="back" onClick={() => setIsCreateVisible(false)}>
                               Отмена
                           </Button>,
                           <Button key="submit" type="primary" onClick={onCreate}>
                               Добавить
                           </Button>,
                       ]
                   }
            >
                <Form>
                    <Form.Item name="task">
                        <Input
                            placeholder={'Название задания'}
                            value={selectedTask.task}
                            onChange={handleInputName}/>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            value={selectedTask.type}
                            onChange={handleSelect}
                            placeholder={'Тип задания'}
                        >
                            <Option value={'Курсовая работа'}>Курсовая работа</Option>
                            <Option value={'Лабораторная работа'}>Лабораторная работа</Option>
                            <Option value={'Практическая работа'}>Практическая работа</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker
                            placeholder={'Деделайн'}
                            format={dateFormat}
                            value={selectedTask.deadline ? moment(selectedTask.deadline, dateFormat) : selectedTask.deadline}
                            onChange={handleDate}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder="Группы"
                            onChange={handleGroupSelect}
                        >
                            {children && children.map(item =>
                                <Option key={item}>{item}</Option>)
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>}
        </React.Fragment>
    );
}

export default CoursesTable;