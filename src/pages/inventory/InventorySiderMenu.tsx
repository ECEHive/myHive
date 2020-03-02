import React from 'react';
import {Layout, Menu} from 'antd';
import {DatabaseOutlined, ExportOutlined} from '@ant-design/icons';
import {RouteComponentProps} from 'react-router';
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;
const {Sider, Content} = Layout;

export default class InventorySiderMenu extends React.Component<RouteComponentProps> {
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
          <Menu.Item key="newcheckout"><Link to={`${match.path}/new-checkout`}><ExportOutlined /> New Checkout  </Link></Menu.Item>
          <Menu.Item key="updatecheckout"><Link to={`${match.path}/update-checkout`}><DatabaseOutlined /> Update Checkout</Link></Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
