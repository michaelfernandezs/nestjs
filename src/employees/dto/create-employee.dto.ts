import { IsEmail, IsNotEmpty, isNumber, IsNumber, isString, IsString, Length } from "class-validator";

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
    sueldo: number;
    @IsString()
    @IsNotEmpty()
    puesto: string;
    @IsNumber()
    @IsNotEmpty()
    edad: number;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
}
