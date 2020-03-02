import {ResponseObject, sharedAxios} from './MyHiveAPI';
import {IHiveInventoryItemClass} from '../model/Inventory';
import {CheckoutRecord} from './checkout';

export default {
  async checkout(record: CheckoutRecord): Promise<ResponseObject<CheckoutRecord>> {
    const response = await sharedAxios.post('v1/inventory/checkout/new', record);
    return response.data;
  },
  async upsertInventoryItemClass(item: IHiveInventoryItemClass): Promise<ResponseObject<IHiveInventoryItemClass>> {
    const response = await sharedAxios.put('/inventory/class/upsert', item);
    return response.data;
  },
  async listInventoryCheckoutItems(): Promise<String[]> {
    const response = await sharedAxios.get('/v1/inventory/checkout/items');
    return response.data.data.map((obj: any) => {
      return obj.ItemName;
    });
  },
  async listCheckoutRecords(): Promise<ResponseObject<CheckoutRecord[]>> {
    const response = await sharedAxios.get('v1/inventory/checkout/list');
    return response.data;
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
