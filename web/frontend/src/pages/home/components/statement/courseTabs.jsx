import React from 'react';
import { Tabs, Card } from 'antd';
import CoursesTable from "./coursesTable";
import MarkTables from "./markTables";

const { TabPane } = Tabs;

const CourseTabs = () => {
    return (

            <Card style={{height: '100vh'}}>
            <Tabs defaultActiveKey="1">
                <TabPane tab={'Задания'} key="1">
                  <CoursesTable />
                </TabPane>
                <TabPane tab={'Оценки'} key="2">
                  <MarkTables />
                </TabPane>
            </Tabs>
            </Card>
    );
}

export default CourseTabs;