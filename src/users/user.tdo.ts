import { IsUUID } from "class-validator";

export class  UserDto {
  id: string;
  username:string;
  password:string;
}

export class TaskRouteParameters{
   @IsUUID()
   id: string;
}