import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository,UpdateResult} from 'typeorm';
import {Expense} from './expenses.entity';
import { CreateExpenseDto } from './dto/createExpense.dto';



@Injectable()
export class ExpensesService {
  constructor(@InjectRepository(Expense)
   private readonly expenseRepository: Repository<Expense>){}


  async getAll():Promise<Expense[]>{
    return await this.expenseRepository.find();
  }


  async getItems():Promise<String[]> {
    return await this.expenseRepository.query("SELECT DISTINCT item FROM explist");
  }

  async query(item:string):Promise<any>{
    return await this.expenseRepository.find({where:{item:item}});
  }


  async findOne(id:number):Promise<any>{
    return await this.expenseRepository.findOneBy({id});
  }

  async createExpense(expense: CreateExpenseDto){
    return await this.expenseRepository.save(expense);
  }

  async update(expData:CreateExpenseDto):Promise<UpdateResult> {
    return await this.expenseRepository.update(expData.id,expData);
  }

  async delete(id:number){
    return this.expenseRepository.delete(id)
  }
}
