import { Injectable } from '@nestjs/common';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from './entities/opportunity.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { OpportunityHelper } from 'src/helpers/opportunity.helper';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectRepository(Opportunity)
    private opportunityRepository: Repository<Opportunity>,
  ) {}

  async create(createOpportunityDto: CreateOpportunityDto) {
    //if no custom probability then calculate the probability
    if (!createOpportunityDto.probability) {
      const probability = OpportunityHelper.calculateProbability(
        createOpportunityDto.stage,
      );
      createOpportunityDto.probability = probability;
    }
    const newOpportunity =
      this.opportunityRepository.create(createOpportunityDto);

    await this.opportunityRepository.save(newOpportunity);
    return {
      data: newOpportunity,
      message: 'OPPORTUNITY_CREATED_SUCCESSFULLY',
    };
  }

  findAll() {
    return this.opportunityRepository.find();
  }

  findOne(id: string) {
    return this.opportunityRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateOpportunityDto: UpdateOpportunityDto) {
    const existingOpportunity = await this.opportunityRepository.findOne({
      where: { id },
    });
    if (!existingOpportunity)
      throw new BadRequestException('OPPORTUNITY_NOT_FOUND');
    //if no custom probability then calculate the probability
    if (!updateOpportunityDto.probability) {
      const probability = OpportunityHelper.calculateProbability(
        updateOpportunityDto.stage,
      );
      updateOpportunityDto.probability = probability;
    }

    const updatedOpportunity = await this.opportunityRepository.save({
      id,
      ...updateOpportunityDto,
    });

    return {
      data: updatedOpportunity,
      message: 'OPPORTUNITY_UPDATED_SUCCESSFULLY',
    };
  }

  async remove(id: string) {
    const existingOpportunity = this.opportunityRepository.findOne({
      where: { id },
    });
    if (!existingOpportunity)
      throw new BadRequestException('OPPORTUNITY_NOT_FOUND');

    await this.opportunityRepository.delete(id);
    return {
      message: 'OPPORTUNITY_DELETED_SUCCESSFULLY',
    };
  }
}
