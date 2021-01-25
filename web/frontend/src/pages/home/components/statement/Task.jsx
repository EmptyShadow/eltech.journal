import React from 'react';
import DescriptionItem from "./descriptiomItem";
import { Form, Row, Col, Divider, Input, Upload, message, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Task = ({task, type, deadline}) => {
    return (
        <React.Fragment>
            <DescriptionItem
                title={'Название'}
                content={task}
            />
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title={'Тип задания'}
                        content={type}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title={'Дата сдачи задания'}
                        content={deadline}
                    />
                </Col>
            </Row>
            <Row>
            <DescriptionItem
                title={'Описание'}
                content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur debitis ea fugiat molestiae nihil nisi non, odio quasi rem rerum soluta.'}
            />
            </Row>
            <Row style={{marginTop: '20px'}}>
                <p>Дополнительные ресурсы:</p>
            </Row>
            <Divider/>
            <Form>
                <Form.Item>
                    <p>Комментарий:</p>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <p>Загрузить файлы:</p>
                    <Upload>
                        <Button icon={<UploadOutlined />}>Загрузить</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button  key="submit" type="primary">Сохранить ответ</Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
}

export default Task;