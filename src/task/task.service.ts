import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task) private taskRepository:Repository<Task> 
    ){}

    async getAll(){
        return this.taskRepository.find();
    }
}
