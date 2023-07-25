import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lead } from './entities/lead.entity';
import { Repository } from 'typeorm';
import { LeadStatus } from './enum/leadstatus.enum';
@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  async create(createLeadDto: CreateLeadDto) {
    const IsEmail = this.leadRepository.find({
      where: {
        email: createLeadDto.email,
      },
    });
    if (IsEmail) {
      throw new BadRequestException({
        success: false,
        message: 'Email already exists',
      });
    }
    return this.leadRepository.save(createLeadDto);
  }

  findAll() {
    return this.leadRepository.find();
  }

  findOne(id: string) {
    return this.leadRepository.find({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateLeadDto: UpdateLeadDto) {
    const lead = this.leadRepository.find({
      where: {
        id: id,
      },
    });
    if (!lead) {
      throw new BadRequestException({
        success: false,
        message: 'NO Lead found',
      });
    }

    return this.leadRepository.update(id, updateLeadDto);
  }

  remove(id: string) {
    const lead = this.leadRepository.find({
      where: {
        id: id,
      },
    });
    if (!lead) {
      throw new BadRequestException({
        success: false,
        message: 'NO Lead found',
      });
    }
    return this.leadRepository.delete(id);
  }

  // updatestatus(id: string, leadstatus: UpdateLeadDto['lead_status']) {
  //   const lead = this.leadRepository.find({
  //     where: {
  //       id: id,
  //     },
  //   });
  //   if (!lead) {
  //     throw new BadRequestException({
  //       success: false,
  //       message: 'NO Lead found',
  //     });
  //   }
  //   return this.leadRepository.update(id, { lead_status: leadstatus });
  // }
}
