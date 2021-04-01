import { Stock } from '../models/stock.model';

export const IStockServiceProvider = 'IStockServiceProvider';

export interface IStockService {
  getAllStocks(): Stock[];

  updateStock(stock: Stock): void;
}
