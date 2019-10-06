import { Action } from 'redux';
import { IHiveWorkbench } from '../../model/Workbench';

export interface WorkbenchState {
  workbenches: IHiveWorkbench[]
}

const defaultValue: WorkbenchState = {
  workbenches: []
};

export default function workbench(state: WorkbenchState = defaultValue, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
