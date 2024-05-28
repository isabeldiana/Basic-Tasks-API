import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from './user.tdo';
import { v4 as uuid } from 'uuid';
import { hashSync as  bcryptHashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/users.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  private readonly users: UserDto[] = []

   constructor(
    @InjectRepository(UserEntity)
    private readonly userReposiory: Repository<UserEntity>
   ){ }
async create(newUser: UserDto){
 const userAlreadyRegistered = await this.findByUserName(newUser.username)
 if(userAlreadyRegistered){
  throw new ConflictException(`User '${newUser.username}' already registered`)
 }

 const dbUser = new UserEntity();
 dbUser.username = newUser.username;
 dbUser.password_hash = bcryptHashSync(newUser.password, 10);
 const { id, username} = await this.userReposiory.save(dbUser)


  return {id, username};
}
async findByUserName(username: string): Promise<UserDto | null> {
 const userfound = await this.userReposiory.findOne({
  where: {username}
 })

 if(!userfound){
 return  null;
 }

 return{
  id: userfound.id,
  username: userfound.username,
  password: userfound.password_hash
 }
}
}
