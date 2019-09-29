import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {RouteComponentProps} from 'react-router';

const {SubMenu} = Menu;
const {Sider, Content} = Layout;

export default class AdminSiderMenu extends React.Component<RouteComponentProps> {
  render() {
    const {location, match} = this.props;
    const matchRemovePrefix = location.pathname.substring(match.path.length, location.pathname.length);
    const selectedPath = matchRemovePrefix.split('/')[1];
    return (
      <Sider width={240} style={{background: '#fff'}}>
        <Menu
          mode="inline"
          defaultOpenKeys={[]}
          selectedKeys={[selectedPath]}
          style={{height: '100%'}}
          theme="dark"
        >
          <Menu.Item key="inventory"><Icon type="code-sandbox"/> Inventory</Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
