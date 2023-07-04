import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffeesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesServices.findOne(id);
  }

  @Post()
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    return this.coffeesServices.create(CreateCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesServices.update(id, UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesServices.remove(id);
  }
}
