import React from 'react';
import DescriptionItem from "./descriptiomItem";
import { Form, Row, Col, Divider, Input, Typography, Button } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const Task = ({task, role}) => {
    const [isVisibleResponse, setIsVisibleResponse] = React.useState(false)
    const [response, setResponse] = React.useState({
        comment: '',
        link: ''
    });

    const handleComment = (event) => {
        setResponse({
                ...response,
                comment: event.target.value,
            }
        )
    }

    const handleLink = (event) => {
        setResponse({
                ...response,
                link: event.target.value,
            }
        )
    }

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
            {role === 'student' && !isVisibleResponse &&
            <Form>
                <Form.Item>
                    <Title level={5}>Ответ студента</Title>
                    <Divider/>
                </Form.Item>
                <Form.Item>
                    <p>Комментарий:</p>
                    <TextArea
                        value={response.comment}
                        onChange={handleComment}
                        rows={4}
                    />
                </Form.Item>
                <Form.Item>
                    <p>Ссылка на файлы:</p>
                    <Input
                        placeholder={'Ссылка'}
                        value={response.link}
                        onChange={handleLink}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => setIsVisibleResponse(true)} key="submit" type="primary">Сохранить ответ</Button>
                </Form.Item>
            </Form>
            }
            {isVisibleResponse &&
            <React.Fragment>
                <DescriptionItem
                    title={'Комментарий'}
                    content={response.comment}
                />
                <DescriptionItem
                    title={'Ссылка'}
                    content={response.link}
                />
            </React.Fragment>
            }
        </React.Fragment>
    );
}

export default Task;