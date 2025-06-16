import { Column,Entity,PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;
    
    @Column()
    apellido: string;
    
    @Column()
    edad: number;

    @Column()
    puesto: string;

    @Column()
    email: string;

    @Column()
    sueldo: number;
}
