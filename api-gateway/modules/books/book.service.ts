import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BookGatewayService {
  constructor(private readonly httpService: HttpService) {}

  async proxyToBookService(path: string, method: string, data?: any) {
    const url = `http://localhost:3002${path}`; // URL Book Service
    const config = { method, url, data };
    const response = await firstValueFrom(this.httpService.request(config));
    return response.data;
  }
}
