import React from 'react';

import styles from './InventorySearch.module.scss';
import {Button, Col, Row, Input} from 'antd';

export default class InventorySearch extends React.Component {
  render() {
    return (
      <div className="hive-container">
        <div className={styles.centerOuterContainer}>
          <Row type="flex" justify="center">
            <Col span={20} className={styles.inventoryTitle}>
              <h2>Search Hive Inventory</h2>
            </Col>
          </Row>
          <Row type="flex" justify="center" className={styles.inventorySearchBar}>
            <Col span={20}>
              <Input.Search
                placeholder="Type something to begin. For example: Arduino"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
