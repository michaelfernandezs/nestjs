import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';


export class CreateDepartamentoDto {
    
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  ubicacion: string;

  @IsNumber()
  @IsNotEmpty()
  numeroEmpleados: number;

  @IsBoolean()
  @IsOptional() 
  status?: boolean;

}
