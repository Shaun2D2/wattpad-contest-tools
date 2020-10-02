import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import React from 'react';

import { HeartOutlined } from '@ant-design/icons';

import Menu from './Components/Menu';

import Home from './Pages/Home';

const {
  Footer,
} = Layout;

const AppRouter = () => (
  <Layout>
    <Menu />
    <Router>
      <Route exact path="/" component={Home} />
    </Router>

    <Footer style={{ textAlign: 'center' }}>
      Made with
      {' '}
      <HeartOutlined />
      {' '}
      by
      {' '}
      <a href="http://github.com/shaun2D2">Shaun</a>
    </Footer>
  </Layout>
);

export default AppRouter;
