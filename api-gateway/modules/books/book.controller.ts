import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { BookGatewayService } from './book.service';

@Controller('books')
export class BookGatewayController {
  constructor(private readonly BookGatewayService: BookGatewayService) {}

  @Post()
  create(@Body() data: any) {
    return this.BookGatewayService.proxyToBookService('/books', 'POST', data);
  }

  @Get()
  findAll() {
    return this.BookGatewayService.proxyToBookService('/books', 'GET');
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.BookGatewayService.proxyToBookService(`/books/${id}`, 'GET');
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.BookGatewayService.proxyToBookService(`/books/${id}`, 'PUT', data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.BookGatewayService.proxyToBookService(`/books/${id}`, 'DELETE');
  }

  @Get('/filter')
  filter(
    @Query('genre') genre?: string,
    @Query('author') author?: string,
    @Query('year') year?: string,
  ) {
    let query = `/books/filter?`;
    if (genre) query += `genre=${genre}&`;
    if (author) query += `author=${author}&`;
    if (year) query += `year=${year}`;
    
    return this.BookGatewayService.proxyToBookService(query, 'GET');
  }
}
