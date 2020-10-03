import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageHeader } from 'antd';

import Container from './Container';

import './Page.scss';

const { Content } = Layout;

const Page = ({ title, subtitle, children }) => (
  <Content className="app-page">
    <Container>
      <PageHeader
        title={title}
        subTitle={subtitle}
      />
      { children }
    </Container>
  </Content>
);

Page.defaultProps = {
  title: null,
  subtitle: null,
};

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
