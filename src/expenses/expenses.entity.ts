import {Column,PrimaryGeneratedColumn,Entity,BaseEntity} from 'typeorm';




@Entity('explist')
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment:"The quiz unique identifier"
  })
  id: number;

  @Column({type:"text"})
  item:string;

  @Column("int")
  amount:number;

  @Column('varchar')
  category:string;

  @Column("varchar")
  location:string;

  @Column('timestamp with time zone')
  spenton:Date

  @Column('timestamp with time zone')
  createdon:Date;

}
