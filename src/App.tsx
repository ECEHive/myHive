import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import './App.scss';
import NavigationHeader from './layout/NavigationHeader';
import InventoryIndex from './pages/inventory/InventoryIndex';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout style={{height: '100%'}}>
        <Route path="/" component={NavigationHeader}/>
        <Layout>
          <Switch>
            <Route path="/inventory" component={InventoryIndex}/>
            <Redirect exact from="/" to="/inventory"/>
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
