import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingController } from './meeting.controller';
import { Meeting } from './meeting.entity';
import { MeetingService } from './meeting.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Meeting])
  ],
  controllers: [MeetingController],
  providers: [MeetingService]
})
export class MeetingModule {}
