import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meeting } from './meeting.entity';

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(Meeting) private meetingRepository:Repository<Meeting>
    ){}

    async getAll(){
        return this.meetingRepository.find();
    }
}
