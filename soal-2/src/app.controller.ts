import { Controller, Get, Query } from '@nestjs/common';
import { FilterDto } from 'src/filter.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sort')
  async sort() {
    return await this.appService.sort();
  }

  @Get('filter')
  async filter(@Query() filterDto: FilterDto) {
    console.log(filterDto);
    return await this.appService.filter(filterDto);
  }
}
