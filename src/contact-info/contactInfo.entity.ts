import { Employee } from "src/employee/employee.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactInfo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    phone:string;

    @Column({nullable:true})
    email:string;

    @OneToOne(()=>Employee,employee=>employee.contactInfo,{onDelete:'CASCADE'})
    @JoinColumn()
    employee:Employee;

}