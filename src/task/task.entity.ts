import { Employee } from "src/employee/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToOne(()=>Employee,employee=>employee.tasks)
    employee:Employee;
}