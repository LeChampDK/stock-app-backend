import { Injectable } from '@nestjs/common';
import { Stock } from '../models/stock.model';
import { IStockService } from '../primary-ports/stock.service.interface';

@Injectable()
export class StockService implements IStockService {
  stocks: Stock[] = [
    {
      id: '1',
      name: 'Novo Nordisk',
      description: 'Global lægemiddelvirksomhed',
      value: 430,
    },
    {
      id: '2',
      name: 'Danske Bank',
      description: 'Danske Bank er den største bank i Danmark',
      value: 120,
    },
    {
      id: '3',
      name: 'Coloplast B',
      description:
        'Coloplast har tre forretningsben: Stomi, urologi- og kontinens samt hud- og sårpleje.',
      value: 955,
    },
    {
      id: '4',
      name: 'Pandora',
      description:
        'Pandora er blandt verdens største smykkeproducenter målt på retail value.',
      value: 680,
    },
    {
      id: '5',
      name: 'Vestas Wind Systems',
      description:
        'Vestas hører til blandt verdens største producenter af vindmøller.',
      value: 1300,
    },
    {
      id: '6',
      name: 'Carlsberg B',
      description:
        'Carlsberg er verdens tredjestørste bryggeri med aktiviteter i Nord- , Vest- og Østeuropa samt Asien.',
      value: 980,
    },
  ];

  getAllStocks(): Stock[] {
    return this.stocks;
  }

  updateStock(stock: Stock): void {
    this.stocks.find((s) => s.id === stock.id).value = stock.value;
  }
}
