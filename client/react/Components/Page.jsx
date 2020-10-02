import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Container from './Container';

import './Page.scss';

const { Content } = Layout;

const Page = ({ title, children }) => (
  <Content className="app-page">
    <Container>
      <h1>{title}</h1>
      <hr />
      { children }
    </Container>
  </Content>
);

Page.defaultProps = {
  title: null,
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
