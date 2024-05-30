import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, TaskDto, TaskStatusEnum } from './task.tdo';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/db/entities/tasks.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>
  ){ }
  private tasks: TaskDto[] = [];
  async create(task: TaskDto){
     const taskToSave: TaskEntity = {
     title: task.title,
     description: task.description,
     expiration: task.expiration,
     status: TaskStatusEnum.TO_DO
     }

     const createdTask = await this.taskRepository.save(taskToSave);
     return this.mapEntityToDto(createdTask)
  }

  async findById(id: string): Promise<TaskDto>{
    const foundTask = await this.taskRepository.findOne({where:{id}});
    if(!foundTask){
     throw new HttpException(` task with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return  this.mapEntityToDto(foundTask);
  }
 async findAll(params: FindAllParameters): Promise<TaskDto[]>{
  const searchParams : FindOptionsWhere<TaskEntity> = { }
 if(params.title){
  searchParams.title = Like(`%${params.title}%`);
 }

 if(params.status){
  searchParams.status = Like(`%${params.status}%`);
 }

 const taskFound = await this.taskRepository.find({
  where: searchParams
 })

 return taskFound.map(taskEntity => this.mapEntityToDto(taskEntity))
 }
  async update(id: string,  task: TaskDto){
   const foundTasK = await this.taskRepository.findOne({where:{id}});
   if(!foundTasK){
    throw new HttpException(`Task with id ${task.id} not found`, HttpStatus.BAD_REQUEST) 
   }
 await this.taskRepository.update(id, this.mapDtoToEntity(task))
    }

  async remove(id: string){
    const result = await this.taskRepository.delete(id);
    if(!result.affected){
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.BAD_REQUEST) 

      
    }
     }

  private mapEntityToDto( taskEntity: TaskEntity): TaskDto{
  return {
    id: taskEntity.id,
    title: taskEntity.title,
    description: taskEntity.description,
    expiration: taskEntity.expiration,
    status: TaskStatusEnum[taskEntity.status]
  }
  }

  private mapDtoToEntity(taskDto: TaskDto): Partial<TaskEntity>{
    return {
      title: taskDto.title ?? '', // Verificação de nulidade
      description: taskDto.description ?? '', // Verificação de nulidade
      expiration: taskDto.expiration, // Verifique se expiration pode ser undefined
      status: taskDto.status?.toString() ?? 'UNKNOWN', // Verificação de nulidade com fallback
    
  }
}
}
