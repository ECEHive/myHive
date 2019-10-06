import { ResponseObject, sharedAxios } from './MyHiveAPI';
import { IHiveWorkbench } from '../model/Workbench';

export default {
  async workbenchList(): Promise<ResponseObject<IHiveWorkbench>> {
    const response = await sharedAxios.get('/workbench/list');
    return response.data;
  }
};
