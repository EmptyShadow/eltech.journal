import React from 'react';
import DescriptionItem from "./descriptiomItem";
import { Form, Row, Col, Divider, Input, Typography, Button } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const Task = ({task, role}) => {
    return (
        <React.Fragment>
            <DescriptionItem
                title={'Название'}
                content={task.task}
            />
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title={'Тип задания'}
                        content={task.type}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title={'Дата сдачи задания'}
                        content={task.deadline}
                    />
                </Col>
            </Row>
            <Row>
                <DescriptionItem
                    title={'Описание'}
                    content={task.description}
                />
            </Row>
            <Divider/>
            {role === 'student' &&
            <Form>
                <Form.Item>
                    <Title level={5}>Ответ студента</Title>
                    <Divider/>
                </Form.Item>
                <Form.Item>
                    <p>Комментарий:</p>
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item>
                    <p>Ссылка на файлы:</p>
                    <Input placeholder={'Ссылка'} />
                </Form.Item>
                <Form.Item>
                    <Button key="submit" type="primary">Сохранить ответ</Button>
                </Form.Item>
            </Form>
            }
        </React.Fragment>
    );
}

export default Task;