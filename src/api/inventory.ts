import {ResponseObject, sharedAxios} from './MyHiveAPI';
import {IHiveInventoryItemClass} from '../model/Inventory';

export default {
  async upsertInventoryItemClass(item: IHiveInventoryItemClass): Promise<ResponseObject<IHiveInventoryItemClass>> {
    const data = await sharedAxios.put('/inventory/class/upsert', item);
    return data.data;
  },
  async listInventoryCheckoutItems(): Promise<String[]> {
    const data = await sharedAxios.get('/v1/inventory/checkout/items');
    return data.data.data.map((obj: any) => {
      return obj.ItemName;
    });
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
