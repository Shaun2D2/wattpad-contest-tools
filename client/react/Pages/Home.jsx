import React, { useCallback } from 'react';
import {
  Card, Col, Row, Form, Input, Button, Select,
} from 'antd';

import Swal from '../Components/Alert';
import Page from '../Components/Page';

import './Home.scss';

const Home = () => {
  const handleSubmit = useCallback(() => {
    Swal.fire({
      title: 'One Moment',
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  }, []);

  return (
    <Page title="Wattpad Comment Contest">
      <Row>
        <Col span={24}>
          <Card style={{ width: '100%' }}>
            <p>Running a comment based contest is really easy now!  Simply create your List of books you'd like to keep track of.  Once you've done so, simply get the ID number for the list.  The list ID is the number before the list name in the URL if you visit your list.  Once you have this, fill out the below form and you'll get a list of all the users who have commented based on your selected criteria.</p>

            <Form
              layout="vertical"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              onFinish={handleSubmit}
            >
              <Form.Item
                label="List ID"
                name="listId"
                rules={[{ required: true, message: 'list ID is required' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Hash Tag"
                name="hashTag"
              >
                <Input addonBefore="#" />
              </Form.Item>

              <Form.Item label="Criteria">
                <Select defaultValue="all-comments">
                  <Select.Option value="all-comments">
                    All comments per chapter
                  </Select.Option>
                  <Select.Option value="one-comment">
                    1 comment per chapter
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default Home;