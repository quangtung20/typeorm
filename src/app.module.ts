import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { EmployeeModule } from './employee/employee.module';
import { MeetingModule } from './meeting/meeting.module';
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'nest_admin',
      autoLoadEntities:true,
      entities:[],
      synchronize:true
    }),

    EmployeeModule,
    ContactInfoModule,
    TaskModule,
    MeetingModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
