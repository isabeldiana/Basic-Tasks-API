import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.tdo';


@Controller('users')
export class UsersController {
  constructor(private  readonly usersService: UsersService){}
    @Post()
    create(@Body()  createUserDto: UserDto){
     const result =  this.usersService.create(createUserDto);
     return result;
    }
  }

