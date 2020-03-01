import React from 'react';
import { Row, Col, List, Button, Skeleton } from 'antd';

import api from '../../api/inventory';
import {CheckoutRecord} from '../../api/checkout';
import { stringify } from 'querystring';

export default class UpdateCheckoutPage extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [] as CheckoutRecord[],
    list: [] as CheckoutRecord[]
  };

  componentDidMount() {
    this.getData((records: CheckoutRecord[]) => {
      this.setState({
        initLoading: false,
        data: records,
        list: records
      });
    });
  }

  getData = ((callback: any) => {
    (async() => {
      try {
        const records = await api.listCheckoutRecords();
        callback(records.data);
      } catch (e) {
      }
    })();
  });

  onLoadMore = () => {
    console.log('(Not really loading more)');
  }

  // onLoadMore = () => {
  //   this.setState({
  //     loading: true,
  //     list: this.state.data.concat(['hello'])
  //   });
  //   // [{ loading: true, name: {} }]
  //   this.getData((res: any) => {
  //     const data = this.state.data.concat(res.results);
  //     this.setState(
  //       {
  //         data,
  //         list: data,
  //         loading: false
  //       },
  //       () => {
  //         // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //         // In real scene, you can using public method of react-virtualized:
  //         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //         window.dispatchEvent(new Event('resize'));
  //       }
  //     );
  //   });
  // };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px'
          }}
        >
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={record => (
          <List.Item
            actions={[
              <Button key="list-loadmore-more" onClick={this.onLoadMore}>Return</Button>,
              <Button key="list-loadmore-more" onClick={this.onLoadMore}>Extend</Button>,
              <Button key="list-loadmore-more" onClick={this.onLoadMore}>Mark Lost or Damaged</Button>
            ]}
          >
            <Skeleton title={false} loading={false} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{record.FirstName.concat(' ', record.LastName)}</a>}
                description={
                  <div>
                    <Row type="flex" justify="start">
                      <Col span={6}>Item:</Col>
                      <Col span={4}>{record.Item}</Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={6}>Status:</Col>
                      <Col span={4}>{record.Status}</Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={6}>Checkout Date:</Col>
                      <Col span={4}>{record.CheckoutDate}</Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={6}>Checkout PI:</Col>
                      <Col span={4}>{record.CheckoutPI}</Col>
                    </Row>
                  </div>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}
