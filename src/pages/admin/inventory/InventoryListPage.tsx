import React from 'react';
import InventoryList from '../../../components/inventory/InventoryList';

export default class InventoryListPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Inventory List</h1>
        <InventoryList/>
      </div>
    );
  }
}
