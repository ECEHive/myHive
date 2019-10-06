import React from 'react';
import {Layout} from 'antd';
import AdminSiderMenu from './AdminSiderMenu';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import WorkbenchListPage from './workbench/WorkbenchListPage';
import InventoryListPage from './inventory/InventoryListPage';

const {Content} = Layout;

export default class AdminLayout extends React.Component<RouteComponentProps> {
  render() {
    const {match} = this.props;
    return (
      <Layout style={{height: '100%'}}>
        <Route path={`${match.path}`} component={AdminSiderMenu}/>
        <Content style={{padding: '24px 24px', height: '100%'}}>
          <Switch>
            <Route path={`${match.path}/inventory`} component={InventoryListPage}/>
            <Route path={`${match.path}/workbench`} component={WorkbenchListPage}/>
            <Redirect to={`${match.path}/inventory`}/>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
