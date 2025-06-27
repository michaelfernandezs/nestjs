import { IsEmail, IsNotEmpty, isNumber, IsNumber, isString, IsString, Length } from "class-validator";
import { Position } from "src/position/entities/position.entity";

export class CreateEmployeeDto {
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

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    position:Position;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    username: string;
    
}
