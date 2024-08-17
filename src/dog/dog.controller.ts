import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response, query } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param('id') params: any, @Query() query: any): string {
    console.log('id:', params);
    console.log('query:', query);
    // console.log('params:', request.params);
    // console.log('query:', request.query);
    return this.dogService.introduce();
  }
}