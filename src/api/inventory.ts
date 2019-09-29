import {ResponseObject, sharedAxios} from './MyHiveAPI';
import {IHiveInventoryItemClass} from '../model/Inventory';

export default {
  async upsertInventoryItemClass(item: IHiveInventoryItemClass): Promise<ResponseObject<IHiveInventoryItemClass>> {
    const data = await sharedAxios.put('/inventory/class/upsert', item);
    return data.data;
  }
};