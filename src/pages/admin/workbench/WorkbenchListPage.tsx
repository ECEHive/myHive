import React from 'react';
import WorkbenchList from '../../../components/workbench/WorkbenchList';

import styles from './WorkbenchListPage.module.scss';

export default class WorkbenchListPage extends React.Component {
  render() {
    return (
      <div className="hive-container">
        <h1 className={styles['hive-admin-workbench-title']}>Workbenches</h1>
        <WorkbenchList/>
      </div>
    );
  }
}
