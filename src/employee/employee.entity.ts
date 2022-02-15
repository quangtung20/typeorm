import { ContactInfo } from "src/contact-info/contactInfo.entity";
import { Meeting } from "src/meeting/meeting.entity";
import { Task } from "src/task/task.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    
    // tạo khóa chính là id và tự tăng
    @PrimaryGeneratedColumn()
    id:number;

    // tạo cột name
    @Column()
    name:string;

    // tạo mối quan hệ 1vs1 với bảng contactInfo
    @OneToOne(()=>ContactInfo/*tham chiếu đến entity ContactInfo*/,contactInfo=>contactInfo.employee)
    // các contactInfo đều phải giống nhau, và là tên trường khi lấy được data
    contactInfo:ContactInfo;

    // tạo mối quan hệ n1 với chính cột manager trong bảng
    @ManyToOne(()=>Employee,employee=>employee.manager,{nullable:true}) // manager ở đây là 1 trường và bắt buột phải giống trường được khai báo ở bên dưới
    manager:Employee;

    // tạo mối quan hệ 1n với chính cột manager trong bảng
    @OneToMany(()=>Employee,manager=>manager.manager)
    managers:Employee[]; // phía đầu n phải khai báo theo mảng

    @OneToMany(()=>Task,task=>task.employee)
    tasks:Task[];

    @ManyToMany(()=>Meeting,meeting=>meeting.employees) // mối quan hệ nn thì đều phải kiểu này (meeting.employees) 
    @JoinTable() // ghép 2 bảng lại với nhau (hay đi với mqh nn) joincolumn thì hay đi với mqh 1-1
    meetings:Meeting[];

    
}