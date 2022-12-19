import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  value: number;

  @Column('timestamp')
  date: Date;

  @Column('varchar')
  image: string;
}
