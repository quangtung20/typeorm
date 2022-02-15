import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private employeeRepository:Repository<Employee>
    ){}

    async getAll():Promise<Employee[]>{
        return this.employeeRepository.find({
            relations:['manager','contactInfo','meetings','tasks']
        });
    }

    async addEmployee(newEmployee):Promise<any>{
        return this.employeeRepository.save(newEmployee);
    }

    async update(id:number,data):Promise<UpdateResult>{
        return this.employeeRepository.update(id,data);
    }

    async delete(id:number):Promise<DeleteResult>{
        return this.employeeRepository.delete(id);
    }
    async getEmployeeByName(name:string):Promise<Employee>{
        return this.employeeRepository.findOne({name});
    }
}
