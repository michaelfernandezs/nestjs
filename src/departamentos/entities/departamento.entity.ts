import { Column,CreateDateColumn,Entity,PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;


    @Column()
    descripcion: string;

    @Column()
    ubicacion: string;

    @Column()
    numeroEmpleados: number;

    @Column({
        default: true,
        
    })
    status: boolean;
    @CreateDateColumn()
    createdAt: Date;
}
