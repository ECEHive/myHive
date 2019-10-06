import Axios from 'axios';
import userAPI from './user';
import workbench from './workbench';
import inventory from './inventory';

export interface ResponseObject<DataType> {
  code: string
  data: DataType
  pagination?: PaginationResponse
  time: number
}

export interface PaginationResponse {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export const sharedAxios = Axios.create({
  baseURL: '/api',
  timeout: 5000
});
sharedAxios.defaults.adapter = require('axios/lib/adapters/http');

export default {
  user: userAPI,
  workbench: workbench,
  inventory: inventory
};
