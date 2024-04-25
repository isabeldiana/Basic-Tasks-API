import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.tdo';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];
  create(task: TaskDto){
   this.tasks.push(task)
   
  }

  findById(id: string): TaskDto{
    const foundTask = this.tasks.filter(t => t.id === id);
    if(foundTask.length){
      return foundTask[0]
    }
    throw new NotFoundException(`Task with id ${id} not found`) 
  }

  update(task: TaskDto){
   let taskIndex =  this.tasks.findIndex(t => t.id === task.id)

   if(taskIndex >= 0){
     this.tasks[taskIndex] = task;
     return;
   }
   throw new HttpException(`Task with id ${task.id} not found`, HttpStatus.BAD_REQUEST) 
  }

  remove(id: string){
    let taskIndex = this.tasks.findIndex(t => t.id === id);
      if(taskIndex >= 0 ){
        this.tasks.splice(taskIndex, 1);
        return;
      }

      throw new HttpException(`Task with id ${id} not found`, HttpStatus.BAD_REQUEST) 
  }
}
