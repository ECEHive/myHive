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
        this.setState({
          dataSource: a
        });
      } catch (e) {
      }
    })();
  }

  onFinish = async(record: any) => {
    console.log('Success:', record);
    const response = await api.checkout(record);
    console.log(response);
  };

  onFinishFailed = (e: any) => {
    console.log('Failed:', e);
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
          <Row justify="center">
            <Col span={20} className={styles.inventoryTitle}>
              <h2>Checkout Form</h2>
            </Col>
          </Row>
          <Row className={styles.inventorySearchBar}>
            <Col span={20}>
              <Form
                {...layout}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                initialValues={{ remember: true }}
                name='checkoutForm'
              >
                <Form.Item
                  rules={[{ required: true }]}
                  label='Item'
                  name='Item'
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
                  style={{ marginBottom: 0 }}
                  label='Borrower'
                >
                  <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 8 }}
                    rules={[{ required: true }]}
                    name='FirstName'
                  >
                    <Input
                      placeholder='First Name'
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
                    rules={[{ required: true }]}
                    name='LastName'
                  >
                    <Input
                      placeholder='Last Name'
                    />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, type: 'email' }]}
                  label='Email'
                  name='Email'
                >
                  <Input
                    placeholder='a@b.com'
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  label='Checkout PI'
                  name='CheckoutPI'
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

class Complete extends React.Component {
}
