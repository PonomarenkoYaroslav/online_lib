import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { HttpModule } from '@nestjs/axios';
import { BookGatewayController } from './books/book.controller';

@Module({
  imports: [UserModule],
})
export class ModulesModule {}

@Module({
  imports: [HttpModule],
  controllers: [BookGatewayController],
})
export class AppModule {}
