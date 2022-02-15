import { Controller, Get } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';

@Controller('contact-info')
export class ContactInfoController {
    constructor(
        private contactService:ContactInfoService
    ){}

    @Get()
    async getAll(){
        return this.contactService.getAll();
    }
}
