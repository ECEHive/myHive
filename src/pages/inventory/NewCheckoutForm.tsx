import React, { Props } from 'react';

import api from '../../api/inventory';

import styles from './NewCheckoutForm.module.scss';
import { Button, Col, Row, Input, AutoComplete, Form } from 'antd';

export default class NewCheckoutForm extends React.Component<any, any> {
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
        // console.log(a);
        this.setState({
          dataSource: a
        });
      } catch (e) {
      }
    })();
  }

  handleSubmit = (e: any) => {
    console.log('handleButtonClick');
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 }
    };

    return (
      <div className="hive-container">
        <div className={styles.centerOuterContainer}>
          <Row type="flex" justify="center">
            <Col span={20} className={styles.inventoryTitle}>
              <h2>Checkout Form</h2>
            </Col>
          </Row>
          <Row type="flex" className={styles.inventorySearchBar}>
            <Col span={20}>
              <Form
                {...layout}
                onSubmit={this.handleSubmit}
              >
                <Form.Item
                  label='Item'
                >
                  <AutoComplete
                    dataSource={this.state.dataSource}
                    filterOption={(input: any, option: any) => {
                      return option.key.toLowerCase().indexOf(input.toLowerCase()) !== -1;
                    }}
                    placeholder="Type something to begin. For example: Arduino"
                  />
                </Form.Item>
                <Form.Item
                  label='End User Name'
                >
                  <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                  >
                    <Input
                      placeholder='First Name'
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                  >
                    <Input
                      placeholder='Last Name'
                    />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  label='Checkout PI'
                >
                  <Input
                    placeholder='George P. Burdell'
                  />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

// class Complete extends React.Component {
// }
