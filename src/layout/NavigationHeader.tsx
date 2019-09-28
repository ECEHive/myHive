import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default class NavigationHeader extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Header className="header">
        <Link to="/">
          <div style={{
            float: 'left',
            width: '120px',
            fontSize: '18px',
            color: 'white'
          }}>MyHive
          </div>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="inventory">Inventory</Menu.Item>
          <Menu.Item key="training">Training Scheduling</Menu.Item>
          <Menu.Item key="admin">Management</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
