import React from 'react';
import {Drawer, List, Avatar, Divider, Col, Row, Form, Typography, Input, InputNumber, Button} from 'antd';
import DescriptionItem from "./descriptiomItem";

const { Title } = Typography;
const { TextArea } = Input;

const Response = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isVisibleResponse, setIsVisibleResponse] = React.useState(false)
    const [response, setResponse] = React.useState({
        comment: '',
        mark: ''
    });

    const handleComment = (event) => {
        setResponse({
                ...response,
                comment: event.target.value,
            }
        )
    }

    const handleMark = (value) => {
        setResponse({
                ...response,
                mark: value,
            }
        )
    }

    return (
        <React.Fragment>
            <List
                dataSource={[
                    {
                        name: 'Егор',
                    },
                    {
                        name: 'Петр',
                    },
                ]}
                bordered
                renderItem={item => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <a onClick={() => setIsVisible(true)} key={`a-${item.id}`}>
                                Посмотреть ответ
                            </a>,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
                            }
                            title={<a href="https://ant.design/index-cn">{item.name}</a>}
                        />
                    </List.Item>
                )}
            />
            <Drawer
                title={'Ответ студента'}
                width={640}
                placement="right"
                closable={true}
                onClose={() => setIsVisible(false)}
                visible={isVisible}
            >
                <Row>
                    <Col span={12}>
                    <DescriptionItem
                        title={'Имя студента'}
                        content={' Петров Петр Петрович'}
                    />
                    </Col>
                    <Col span={8}>
                        <DescriptionItem
                            title={'Группа'}
                            content={'5302'}
                        />
                    </Col>
                </Row>
                <Row>
                    <DescriptionItem
                        title={'Комментарий студента'}
                        content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad delectus magnam nostrum vel! Corporis deserunt earum facilis laudantium quas, sit!'}
                    />
                </Row>
                <Row style={{ marginTop: '20px'}}>
                    <DescriptionItem
                        title={'Ссылка на загруженные файлы:'}
                        content={<a href={'#'}>fdfdfdfdf@fsfdf.com</a>}
                    />
                </Row>
                <Divider/>
                {!isVisibleResponse && <Form>
                    <Form.Item>
                        <Title level={5}>Ответ преподавателя</Title>
                        <Divider/>
                    </Form.Item>
                    <Form.Item>
                        <p>Комментарий:</p>
                        <TextArea rows={4} value={response.comment} onChange={handleComment}/>
                    </Form.Item>
                    <Form.Item>
                        <DescriptionItem
                            title={'Оценка'}
                            content={<InputNumber min={0} max={5} value={response.mark} onChange={handleMark} />
                            }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={() => setIsVisibleResponse(true)} key="submit" type="primary">Сохранить комментарий</Button>
                    </Form.Item>
                </Form>}
                {isVisibleResponse &&
                <React.Fragment>
                    <DescriptionItem
                        title={'Комментарий'}
                        content={response.comment}
                    />
                    <DescriptionItem
                        title={'Оценка'}
                        content={response.mark}
                    />
                </React.Fragment>
                }
            </Drawer>
        </React.Fragment>

    );
}

export default Response;