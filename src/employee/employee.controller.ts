import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(
        private employeeService:EmployeeService
    ){}

   @Get()
    async getAll(){
        return this.employeeService.getAll()
    }

    @Get('search')
    async getEmployeeByName(@Query ('name') name:string){
        return this.employeeService.getEmployeeByName(name);
    }

    @Post()
    async addEmployee(@Body() newEmployee:any){
        return this.employeeService.addEmployee(newEmployee);
    }

    @Put(':id')
    async update(@Param() id:number,  @Body() data:any){
        return this.employeeService.update(id,data);
    }

    @Delete(':id')
    async delete(@Param('id')id:number){
        return this.employeeService.delete(id);
    }

}
