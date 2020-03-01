import React, { Props } from 'react';

import api from '../../api/inventory';

import styles from './InventorySearch.module.scss';
import {Button, Col, Row, Input, AutoComplete} from 'antd';

export default class InventorySearch extends React.Component<any, any> {
  constructor(param: Props<any>) {
    super(param);

    this.state = {
      value: '',
      dataSource: []
    };
  }

  componentDidMount() {
    (async() => {
      try {
        const a = await api.listInventoryCheckoutItems();
        console.log(a);
        this.setState({
          dataSource: a
        });
      } catch (e) {
      }
    })();
  }

  render() {
    return (
      <div className="hive-container">
        <div className={styles.centerOuterContainer}>
          <Row type="flex" justify="center">
            <Col span={20} className={styles.inventoryTitle}>
              <h2>Checkout Form</h2>
            </Col>
          </Row>
          <Row type="flex" justify="center" className={styles.inventorySearchBar}>
            <Col span={20}>
              <AutoComplete
                dataSource={this.state.dataSource}
                filterOption={(input: any, option: any) => {
                  return option.key.toLowerCase().indexOf(input.toLowerCase()) !== -1;
                }}
                // onSearch={}
                placeholder="Type something to begin. For example: Arduino"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

class Complete extends React.Component {
}
