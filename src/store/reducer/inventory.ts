import {Action} from 'redux';
import {IHiveInventoryItemClass} from '../../model/Inventory';

interface InventoryState {
  searchKeyword: string
  searchResult: IHiveInventoryItemClass[]
}

const defaultState: InventoryState = {
  searchKeyword: '',
  searchResult: []
};

export default function inventory(state: InventoryState = defaultState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
