import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BookGatewayController } from './book.controller';

@Module({
  imports: [HttpModule],
  controllers: [BookGatewayController],
})
export class AppModule {}