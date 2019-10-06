import {Action} from 'redux';
import {IWorkbench} from '../../model/Workbench';

export interface WorkbenchState {
  workbenches: IWorkbench[]
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
