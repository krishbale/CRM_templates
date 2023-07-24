import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { opportunity_stage } from '../entities/opportunity.entity';

export class CreateOpportunityDto {
  @IsString()
  opportunity_name: string;

  @IsString()
  account_name: string;

  @IsEnum(opportunity_stage)
  stage: opportunity_stage;

  @IsDateString()
  close_date: Date;

  @IsNumber()
  @IsOptional()
  probability: number;

  @IsString()
  opportunity_owner_alias: string;
}
