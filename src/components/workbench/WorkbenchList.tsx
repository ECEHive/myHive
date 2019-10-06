import React from 'react';
import { IHiveWorkbench } from '../../model/Workbench';
import { Collapse } from 'antd';
import WorkbenchListItemHeader from './WorkbenchListItemHeader';

const { Panel } = Collapse;

interface WorkbenchListProps {
  workbenches: IHiveWorkbench[]
}

export default class WorkbenchList extends React.Component {
  static defaultProps = {
    workbenches: []
  };

  render() {
    return (
      <div>
        <Collapse>
          <Panel header={<WorkbenchListItemHeader/>} key={1}/>
          <Panel header={<WorkbenchListItemHeader/>} key={2}/>
          <Panel header={<WorkbenchListItemHeader/>} key={3}/>
          <Panel header={<WorkbenchListItemHeader/>} key={4}/>
          <Panel header={<WorkbenchListItemHeader/>} key={5}/>
        </Collapse>
      </div>
    );
  }
}
