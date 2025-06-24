/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { Employee } from './employees/entities/employee.entity';  
import { Departamento } from './departamentos/entities/departamento.entity';
import { PositionModule } from './position/position.module';

@Module({
  imports: [EmployeesModule,
   TypeOrmModule.forRoot({

    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'empleados',
    autoLoadEntities: true,
    synchronize: true, // This should be false in production
  

  }),
  DepartamentosModule,
  PositionModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
