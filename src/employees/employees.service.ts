import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee | {}> {
    try {
      const employee = this.employeesRepository.create(createEmployeeDto);
      return await this.employeesRepository.save(employee);
    } catch (error) {
      console.error('Error al crear empleado:', error);
      return {};
    }
  }

  async findAll(): Promise<Employee[] | []> {
    try {
      return await this.employeesRepository.find();
    } catch (error) {
      console.error('Error al buscar todos los empleados:', error);
      return [];
    }
  }

  async findEmployee(id: number): Promise<Employee | {}> {
    try {
      const employee = await this.employeesRepository.findOneBy({ id });
      return employee || {};
    } catch (error) {
      console.error(`Error al buscar empleado con ID ${id}:`, error);
      return {};
    }
  }

  async updateEmployee(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee | {}> {
    try {
      const employee = await this.employeesRepository.findOneBy({ id });
      if (!employee) return {};
      const updated = this.employeesRepository.merge(employee, updateEmployeeDto);
      return await this.employeesRepository.save(updated);
    } catch (error) {
      console.error(`Error al actualizar empleado con ID ${id}:`, error);
      return {};
    }
  }

  async remove(id: number): Promise<Employee | {}> {
    try {
      const employee = await this.employeesRepository.findOneBy({ id });
      if (!employee) return {};
      await this.employeesRepository.remove(employee);
      return employee;
    } catch (error) {
      console.error(`Error al eliminar empleado con ID ${id}:`, error);
      return {};
    }
  }

  async searchByName(name: string): Promise<Employee[] | []> {
    try {
      return await this.employeesRepository.find({
        where: { firstName: name },
      });
    } catch (error) {
      console.error(`Error al buscar empleados por nombre "${name}":`, error);
      return [];
    }
  }
}
