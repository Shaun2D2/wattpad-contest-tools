import React from 'react';

import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const AppMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="mail" icon={<HomeOutlined />}>
      Home
    </Menu.Item>
  </Menu>
);

export default AppMenu;
