
import { Employee } from 'src/employees/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  salary: number;

  

  @Column({ default: true })
  isActive: boolean;



   @OneToMany(() => Employee, (employee) => employee.position)
  employees: Employee[];
}

    
