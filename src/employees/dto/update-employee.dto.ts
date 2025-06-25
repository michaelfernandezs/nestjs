import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsNotEmpty, isNumber, IsNumber, isString, IsString, Length } from "class-validator";
import { Position } from 'src/position/entities/position.entity';

export class UpdateEmployeeDto{

      @IsString()
        @IsNotEmpty()
        @Length(3, 20)
        firstName: string;
    
        @Length(3, 20)
        @IsString()
        @IsNotEmpty()
        apellido: string;
    
       
    
        @IsNumber()
        @IsNotEmpty()
        edad: number;
    
      
    
        @IsNumber()
        @IsNotEmpty()
        position:Position

        
}
