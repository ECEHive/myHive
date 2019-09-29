import React from 'react';
import {ReactComponent as Svg404icon} from './404.svg';
import styles from './Error404Page.module.scss';
import './Error404Page.scss';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

export default class Error404Page extends React.Component {
  render() {
    return (
      <div className={styles.body404}>
        <div className={styles.icon404}>
          <Svg404icon/>
        </div>
        <div className={styles.messageBox}>
          <h1>404</h1>
          <p>Page not found</p>
          <div className={styles['buttons-con']}>
            <div className="action-link-wrap">
              <Button><Link to="/">Go Home</Link></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
