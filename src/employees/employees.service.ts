import { Injectable, Post } from '@nestjs/common';
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
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

 async findAll() {
    return this.employeesRepository.find();
  }


  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeesRepository.update(id, updateEmployeeDto);
    return this.findEmployee(id);
  }

  async remove(id: number) {
    const employee = await this.findEmployee(id);
    if (!employee) {
      throw new Error(`Employee with id ${id} not found`);
    }
    await this.employeesRepository.remove(employee);
    return employee;
  }

 
async searchByName(name: string): Promise<Employee[]> {
  return this.employeesRepository.find({
    where: { firstName: name },
  });
}
  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeesRepository.create(createEmployeeDto);
    return this.employeesRepository.save(employee);
  }

}