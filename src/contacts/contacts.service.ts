import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) {}
  async create(createContactDto: CreateContactDto) {
    const newContact = this.contactRepository.create(createContactDto);
    await this.contactRepository.save(newContact);
    return {
      data: newContact,
      message: 'CONTACT_CREATED_SUCCESSFULLY',
    };
  }

  findAll() {
    return {
      data: this.contactRepository.find(),
      message: 'CONTACT_FETCHED_SUCCESSFULLY',
    };
  }

  findOne(id: string) {
    return {
      data: this.contactRepository.findOneOrFail({ where: { id } }),
      message: 'CONTACT_FETCHED_SUCCESSFULLY',
    };
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const existingContact = this.contactRepository.findOne({ where: { id } });
    if (!existingContact) throw new BadRequestException('CONTACT_NOT_FOUND');

    await this.contactRepository.update(id, {
      ...updateContactDto,
    });
    const updatedContact = await this.contactRepository.findOne({
      where: { id },
    });
    return { data: updatedContact, message: 'CONTACT_UPDATED_SUCCESSFULLY' };
  }

  async remove(id: string) {
    const existingContact = this.contactRepository.findOne({ where: { id } });
    if (!existingContact) throw new BadRequestException('CONTACT_NOT_FOUND');

    await this.contactRepository.delete(id);
    return { message: 'CONTACT_DELETED_SUCCESSFULLY' };
  }
}
