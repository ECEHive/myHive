import React from 'react';
import {Menu, Layout} from 'antd';
import {Link, RouteComponentProps} from 'react-router-dom';

const {Header} = Layout;

export default class NavigationHeader extends React.Component<RouteComponentProps> {
  currentFirstLevelRoute(): string {
    return this.props.location.pathname.split('/')[1];
  }

  render() {
    const activeRoute = this.currentFirstLevelRoute();
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
          style={{lineHeight: '64px'}}
          selectedKeys={[activeRoute]}
        >
          <Menu.Item key="inventory"><Link to="/inventory">Inventory</Link></Menu.Item>
          <Menu.Item key="training">Training Scheduling</Menu.Item>
          <Menu.Item key="admin"><Link to="/admin">Management</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}
