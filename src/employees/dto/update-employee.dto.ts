import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsNotEmpty, isNumber, IsNumber, IsOptional, isString, IsString, Length } from "class-validator";
import { Position } from 'src/position/entities/position.entity';

export class UpdateEmployeeDto{

      @IsString()
        @IsOptional()
        @Length(3, 20)
        firstName: string;
    
        @Length(3, 20)
        @IsString()
        @IsOptional()
        apellido: string;

        @IsOptional()
        @IsNumber()
        @IsNotEmpty()
        edad: number;

        @IsNumber()
        @IsNotEmpty()
        position: Position;

        @IsString()
        @IsOptional()
        @Length(6, 20)
       password: string;

       @IsString()
      @IsOptional()
      @Length(3, 20)
      username: string;

}
