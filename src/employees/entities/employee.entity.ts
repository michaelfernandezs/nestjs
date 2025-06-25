import { Position } from "src/position/entities/position.entity";
import { Column,Entity,ManyToOne,PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
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
    email: string;

    @ManyToOne(()=>Position, (position) => position.employees )
    position: Position;

  
}
