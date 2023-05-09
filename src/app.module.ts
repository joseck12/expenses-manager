import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import {typeOrmConfig} from './typeorm.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [ExpensesModule,
     TypeOrmModule.forRoot(typeOrmConfig)
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
