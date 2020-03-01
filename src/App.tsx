import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import './App.scss';
import NavigationHeader from './layout/NavigationHeader';
import InventoryLayout from './pages/inventory/InventoryLayout';
import Error404Page from './layout/Error404Page';
import AdminLayout from './pages/admin/AdminLayout';

const {Footer, Content} = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout style={{height: '100%'}}>
        <Route path="/" component={NavigationHeader}/>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/inventory"/>

            <Route path="/inventory" component={InventoryLayout}/>
            <Route path="/admin" component={AdminLayout}/>

            <Route exact path="/404" component={Error404Page}/>
            <Redirect from="/" to="/404"/>
          </Switch>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
