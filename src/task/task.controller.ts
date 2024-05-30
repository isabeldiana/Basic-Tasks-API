import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.tdo';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TaskRouteParameters } from 'src/users/user.tdo';
@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService){}
  @Post()
  async create(@Body() createTask: TaskDto){
  const result = await this.taskService.create(createTask);
  return result;
  }
  @Get('/:id')
  async findById(@Param('id') id:string): Promise<TaskDto>{
    return this.taskService.findById(id);
   
  }
  @Get()
  async findAll(@Query() params: FindAllParameters): Promise<TaskDto[]>{
    const result = await this.taskService.findAll(params);
    return result;
  }
  @Put('/:id')
async update(@Param() params: TaskRouteParameters, @Body() task: TaskDto){
 const result = await this.taskService.update(params.id, task);
 return result;
}

@Delete('/:id')
remove(@Param('id') id: string){
  return this.taskService.remove(id)
}
}