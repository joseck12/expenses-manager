import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Expense} from './expenses/expenses.entity';


export const typeOrmConfig:TypeOrmModuleOptions = {

   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'joseck',
   password: 'fabby',
   database: 'expenses',
   entities: [Expense],
   synchronize: true,
}
