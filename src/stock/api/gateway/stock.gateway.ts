import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Stock } from '../../core/models/stock.model';
import { Socket } from 'socket.io';
import { StockService } from '../../core/services/stock.service';
import { Inject } from '@nestjs/common';
import { IStockServiceProvider } from '../../core/primary-ports/stock.service.interface';

@WebSocketGateway()
export class StockGateway implements OnGatewayConnection {
  constructor(@Inject(IStockServiceProvider) private stockService: StockService) {}
  @WebSocketServer() server;
  @SubscribeMessage('updateStock')
  handleStockUpdateEvent(
    @MessageBody() stock: Stock,
    @ConnectedSocket() socket: Socket,
  ): void {
    this.stockService.updateStock(stock);
    this.server.emit('allStocks', this.stockService.getAllStocks());
  }

  handleConnection(socket: Socket, ...args: any[]): any {
    socket.emit('allStocks', this.stockService.getAllStocks());
  }
}
