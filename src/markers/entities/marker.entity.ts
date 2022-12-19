import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('float')
  lat: number;

  @Column('float')
  lon: number;

  @Column('bool')
  status: boolean;

  @Column('varchar')
  imageUrl: string;

  @Column('varchar')
  qrCode: string;

  @Column('varchar')
  url: string;
}
