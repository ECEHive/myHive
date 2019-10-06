import {ResponseObject, sharedAxios} from './MyHiveAPI';
import {IHiveInventoryItemClass} from '../model/Inventory';

export default {
  async upsertInventoryItemClass(item: IHiveInventoryItemClass): Promise<ResponseObject<IHiveInventoryItemClass>> {
    const data = await sharedAxios.put('/inventory/class/upsert', item);
    return data.data;
  },
  async listInventoryItemClass(page = 0, pageSize: number = 100): Promise<ResponseObject<IHiveInventoryItemClass[]>> {
    const data = await sharedAxios.get('/inventory/class/list', {
      params: {
        page,
        pageSize
      }
    });
    return data.data;
  }
};
