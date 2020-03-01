import React from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import InventorySearch from './NewCheckoutForm';
import InventoryDetail from './InventoryDetail';

export default class InventoryIndex extends React.Component<RouteComponentProps> {
  render() {
    const {match} = this.props;
    return (
      <Switch>
        <Route path={`${match.path}/detail`} component={InventoryDetail}/>
        <Route path={`${match.path}`} component={InventorySearch}/>
      </Switch>
    );
  }
}
