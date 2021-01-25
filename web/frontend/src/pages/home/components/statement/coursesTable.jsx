import React from 'react';
import {Drawer, Button, DatePicker, Form, Input, Modal, Select, Space, Table, Tag} from "antd";
import Task from "./Task";
import moment from 'moment';
import Response from "./response";

const { Option } = Select;
const { TextArea } = Input;

const dateFormat = 'DD.MM.YYYY';
const children = ['5301', '5302', '5303', '5304', '5306', '5307', '5308'];

const CoursesTable = ({courses, role}) => {
    let columnsTask = [
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
                    <a onClick={() => {
                        setSelectedTask(data);
                        openDrawer(data);
                    }} key={'full'}>Подробно</a>
                    { role === 'teacher' && <a onClick={() => setIsVisibleTeacherDrawer(true)} key={'teachersDrawer'}>Ответы</a> }
                    { role === 'teacher' &&   <a onClick={() => onDelete(data)} key={'delete'}>Удалить</a> }
                </Space>
            ),
        },
    ];

    columnsTask = role !== 'student' ? columnsTask : [...columnsTask, {
        title: 'Оценка',
        dataIndex: 'mark',
        key: 'mark'
    }]
    const [dataSourceTask, setDataSourceTask] = React.useState([
        {
            key: '1',
            task: 'Исследование систем',
            type: 'Курсовая работа',
            deadline: '10.01.2021',
            groups: ['5301'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
            key: '2',
            task: 'Лабораторная работа',
            type: 'Лабораторная работа',
            deadline: '14.01.2021',
            groups: ['5301', '5302'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        }
    ]);
    const [isCreateVisible, setIsCreateVisible] = React.useState(false);
    const [newTask, setNewTask] = React.useState({
        key: '',
        task: '',
        type: '',
        deadline: '',
        groups: [],
        description: ''
    });
    const [isVisibleDrawer, setIsVisibleDrawer] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState({});
    const [isVisibleTeacherDrawer, setIsVisibleTeacherDrawer] = React.useState(false)

    const openDrawer = () => {
        setIsVisibleDrawer(true)
    };

    const onDelete = (data) => {
        setDataSourceTask(dataSourceTask.filter(item => item.key !== data.key));
    }

    const onCreate = () => {
        setNewTask({
            ...newTask,
            key: Math.random()
        });

        setDataSourceTask([...dataSourceTask, newTask]);
        setNewTask({
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
        setNewTask({
            ...newTask,
            task: event.target.value
        });
    }

    const handleSelect = (value) => {
        setNewTask({
            ...newTask,
            type: value
        });
    }

    const handleDate = (date, dateString) => {
        setNewTask({
            ...newTask,
            deadline: dateString
        });
    }

    const handleGroupSelect = (value) => {
        setNewTask({
            ...newTask,
            groups: value
        });
    }

    const handleDescription = (event) => {
        setNewTask({
            ...newTask,
            description: event.target.value
        });
    }

    return (
        <React.Fragment>
            <Table
                columns={columnsTask}
                dataSource={dataSourceTask}
                bordered
                footer={() => role === 'teacher' ? <Button onClick={() => setIsCreateVisible(true)}>Добавить задание</Button> : ''}
            />

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
                            value={newTask.task}
                            onChange={handleInputName}/>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            value={newTask.type}
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
                            value={newTask.deadline ? moment(newTask.deadline, dateFormat) : newTask.deadline}
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
                    <Form.Item>
                        <TextArea rows={4} value={newTask.description} onChange={handleDescription} />
                    </Form.Item>
                </Form>
            </Modal>

            <Drawer
                title={'Задание'}
                width={720}
                placement={'right'}
                closable
                onClose={() => setIsVisibleDrawer(false)}
                visible={isVisibleDrawer}

            >
              <Task task={selectedTask} role={role}  />
            </Drawer>
            <Drawer
                title={'Ответы'}
                width={400}
                placement={'right'}
                closable
                onClose={() => setIsVisibleTeacherDrawer(false)}
                visible={isVisibleTeacherDrawer}

            >

                <Response />
            </Drawer>
        </React.Fragment>
    );
}

export default CoursesTable;