import React from 'react';
import {Tag, Table, Button, Form, Input, Select, Modal} from 'antd';

const children = ['Экзамен', 'Лабораторные работы', 'Практические работы'];

const { Option } = Select;

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

const Courses = () => {
    const [visiblePopup, serVisiblePopup] = React.useState(false);
    const [dataSource, setDataSource] = React.useState([
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

    ]);
    const [newCourse, setNewCourse] = React.useState({
        key: '',
        name: '',
        teacher: '',
        semester: '',
        level: '',
        report: []
    });

    const handleInputCourse = (event) => {
        setNewCourse({
            ...newCourse,
            key: Math.random(),
            name: event.target.value
        })
    }

    const handleTeachersSelect = (value) => {
        setNewCourse({
            ...newCourse,
            teacher: value
        })
    }

    const handleInputLevel = (value) => {
        setNewCourse({
            ...newCourse,
            level: value
        })
    }

    const handleSelectSem = (value) => {
        setNewCourse({
            ...newCourse,
            semester: value
        })
    }

    const handleSelect = (value) => {
        setNewCourse({
            ...newCourse,
            report: value
        })
    }

    const onCreate = () => {
        setDataSource([...dataSource, newCourse]);
        setNewCourse({
            key: '',
            name: '',
            teacher: '',
            semester: '',
            level: '',
            report: []
        })
        serVisiblePopup(false);
    }

    return (
        <React.Fragment>
            <Table
                columns={columns}
                dataSource={dataSource}
                footer={() => <Button onClick={() => serVisiblePopup(true)}>Добавить курс</Button>}
            />

            <Modal title={'Новый курс'}
                   visible={visiblePopup}
                   onCancel={() => serVisiblePopup(false)}
                   footer={
                       [
                           <Button key="back" onClick={() => serVisiblePopup(false)}>
                               Отмена
                           </Button>,
                           <Button key="submit" type="primary" onClick={onCreate}>
                               Добавить
                           </Button>,
                       ]
                   }
            >
                <Form>
                    <Form.Item name="name">
                        <Input
                            placeholder={'Название курса'}
                            value={newCourse.name}
                            onChange={handleInputCourse}/>
                    </Form.Item>
                    <Form.Item>
                        <Select
                            value={newCourse.teacher}
                            onChange={handleTeachersSelect}
                            placeholder={'Преподаватель'}
                        >
                            <Option value={'Кузьмин Сергей Алексеевич'}>Кузьмин Сергей Алексеевич</Option>
                            <Option value={'Новакова Наталья Евгеньевна'}>Новакова Наталья Евгеньевна</Option>
                            <Option value={'Горячев Александр Вадимович'}>Горячев Александр Вадимович</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>

                        <Select
                            value={newCourse.level}
                            onChange={handleInputLevel}
                            placeholder={'Уровень'}
                        >
                            <Option value={'Бакалавр'}>Бакалавр</Option>
                            <Option value={'Магистр'}>Магистр</Option>
                            <Option value={'Аспирант'}>Аспирант</Option>
                        </Select>

                    </Form.Item>
                    <Form.Item>

                        <Select
                            value={newCourse.semester}
                            onChange={handleSelectSem}
                            placeholder={'Уровень'}
                        >
                            <Option value={'1'}>1</Option>
                            <Option value={'2'}>2</Option>
                            <Option value={'3'}>3</Option>
                            <Option value={'4'}>4</Option>
                            <Option value={'5'}>5</Option>
                            <Option value={'6'}>6</Option>
                            <Option value={'7'}>7</Option>
                            <Option value={'8'}>8</Option>
                        </Select>

                    </Form.Item>
                    <Form.Item>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder={'Отчетность'}
                            onChange={handleSelect}
                        >
                            {children && children.map(item =>
                                <Option key={item}>{item}</Option>)
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    );
}

export default Courses;