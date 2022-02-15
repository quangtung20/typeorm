import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './contactInfo.entity';

@Injectable()
export class ContactInfoService {
    constructor(
        @InjectRepository(ContactInfo) private contactInfoRepository:Repository<ContactInfo>
    ){}

    async getAll(){
        return this.contactInfoRepository.find();
    }
}
