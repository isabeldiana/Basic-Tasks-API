import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: 'users'})
@Unique(['username'])
export class UserEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column({type: 'varchar'})
  username: string;
 
  @Column({type: 'varchar', name: 'password_hash'})
  password_hash: string;

}