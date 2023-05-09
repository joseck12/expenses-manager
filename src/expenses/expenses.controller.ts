import { Controller, Get, Post,Patch,Delete, Body,Param, ValidationPipe, UsePipes } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/createExpense.dto';
import {Expense} from './expenses.entity';
import { identity } from 'rxjs';

@Controller('expenses')
export class ExpensesController {

  constructor(private expensesService: ExpensesService) { }
  @Get('/')
  async getExpenses(): Promise<Expense[]> {
    return await this.expensesService.getAll();
  }

   @Get("/query/item")
  async getItems():Promise<any>{
    return this.expensesService.getItems();
  }


   @Get("/query/:item")
  async query(@Param('item') item):Promise<Expense[]>{
    return await this.expensesService.query(item);
  }

  @Get("/:id")
  async getOne(@Param() param):Promise<Expense[]>{
    return await this.expensesService.findOne(param.id);
  }

 

 

  @Post('create')
  @UsePipes(ValidationPipe)
  createExpense(@Body() expData: CreateExpenseDto) {
    return this.expensesService.createExpense(expData);
  }

  @Post(":id/update")
  async update(@Param('id') id, @Body()expData:CreateExpenseDto):Promise<any> {
    expData.id = Number(id);
    return this.expensesService.update(expData);
  }

  @Post(":id/delete")
  async delete(@Param('id')id):Promise<any> {
    return this.expensesService.delete(id)
  }
}
