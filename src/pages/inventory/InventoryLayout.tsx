import React from 'react';
import {Layout} from 'antd';
import InventorySiderMenu from './InventorySiderMenu';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import NewCheckoutForm from './NewCheckoutForm';
import UpdateCheckoutPage from './UpdateCheckoutPage';

const {Content} = Layout;

export default class InventoryLayout extends React.Component<RouteComponentProps> {
  render() {
    const {match} = this.props;
    return (
      <Layout style={{height: '100%'}}>
        <Route path={`${match.path}`} component={InventorySiderMenu}/>
        <Content style={{padding: '24px 24px', height: '100%'}}>
          <Switch>
            <Route path={`${match.path}/new-checkout`} component={NewCheckoutForm}/>
            <Route path={`${match.path}/update-checkout`} component={UpdateCheckoutPage}/>
            <Redirect to={`${match.path}/new-checkout`}/>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
