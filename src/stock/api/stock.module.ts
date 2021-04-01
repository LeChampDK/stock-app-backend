import { Module } from '@nestjs/common';
import { StockGateway } from './gateway/stock.gateway';
import { IStockServiceProvider } from '../core/primary-ports/stock.service.interface';
import { StockService } from '../core/services/stock.service';

@Module({
  providers: [
    StockGateway,
    { provide: IStockServiceProvider, useClass: StockService },
  ],
})
export class StockModule {}
