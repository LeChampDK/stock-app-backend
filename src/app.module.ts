import { Module } from '@nestjs/common';
import { StockGateway } from './stock/api/gateway/stock.gateway';
import { StockModule } from './stock/api/stock.module';
import { StockService } from './stock/core/services/stock.service';

@Module({
  imports: [StockModule],
})
export class AppModule {}
