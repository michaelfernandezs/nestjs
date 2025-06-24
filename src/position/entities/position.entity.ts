
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

    
