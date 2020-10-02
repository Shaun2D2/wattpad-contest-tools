import React from 'react';
import { Card, Col, Row } from 'antd';

import { CommentOutlined } from '@ant-design/icons';

import Page from '../Components/Page';

import './Home.scss';

const Home = () => (
  <Page title="Wattpad Contest Tools">
    <Row gutter={16}>
      <Col span={8}>
        <Card className="home__card" bordered={false}>
          <CommentOutlined style={{ fontSize: '200px', marginBottom: 15 }} />
          <h3>Comment Contest</h3>
        </Card>
      </Col>
    </Row>
  </Page>
);

export default Home;
