import React from 'react';
import {Space, Table, Modal, Form, Input, InputNumber, Button} from "antd";

const MarkTables = ({role}) => {
    const columnsMark = [
        {
            title: 'Студент',
            dataIndex: 'student',
            key: 'student',
        },
        {
            title: 'Оценка',
            dataIndex: 'mark',
            key: 'mark',
            editable: true
        }
    ]

    const columnsDataMark = role==='teacher' ? [...columnsMark, {
        title: 'Действия',
        key: 'action',
        render: (data) => (
            <Space size="middle">
                <a onClick={() => {
                    setSelectedStudent(data)
                    onEdit()
                }} key={'edit'}>Изменить</a>
            </Space>
        ),
    }] : columnsMark;


    const [isVisible, setIsVisible] = React.useState(false);
    const [selectedStudent, setSelectedStudent] = React.useState({})
    const [dataSourceMark, setDataSourceMark] = React.useState([
        {
            key: '32',
            student: 'Бердникова Евгения Викторовна',
            mark: ''
        },
        {
            key: '243',
            student: 'Неботов Дмитрий Сергеевич',
            mark: ''
        },
        {
            key: '23',
            student: 'Ларин Роман Сергеевич',
            mark: ''
        },
        {
            key: '3223',
            student: 'Петров Петр Петрович',
            mark: ''
        }
    ]);

    const onEdit = () => {
        setIsVisible(true);
    }

    const setEdit = () => {
        setDataSourceMark(dataSourceMark.map(item => item.key === selectedStudent.key ? selectedStudent : item));
        setIsVisible(false);
    }

    const handleInput = (value) => {
        setSelectedStudent({
            ...selectedStudent,
            mark: value
        });
    }


    return (
        <React.Fragment>
            <Table
                columns={columnsDataMark}
                dataSource={dataSourceMark}
            />

            {isVisible &&
            <Modal
                title={'Оценка'}
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                footer={
                    [
                        <Button key="back" onClick={() => setIsVisible(false)}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" onClick={setEdit}>
                            Изменить
                        </Button>,
                    ]
                }
            >
                <Form>
                    <Form.Item>
                        <Input value={selectedStudent.student} disabled />
                    </Form.Item>
                    <Form.Item>
                        <InputNumber min={1} max={5} value={selectedStudent.mark} onChange={handleInput} />
                    </Form.Item>
                </Form>
            </Modal>}
        </React.Fragment>
    );
}

export default MarkTables;