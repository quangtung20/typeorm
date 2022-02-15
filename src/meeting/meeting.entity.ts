import { Employee } from "src/employee/employee.entity";
import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meeting {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    zoomUrl:string;

    @ManyToMany(()=>Employee,employee=>employee.meetings)
    employees:Employee[];
}