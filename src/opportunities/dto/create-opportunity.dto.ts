import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { opportunity_stage } from '../entities/opportunity.entity';

export class CreateOpportunityDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  opportunity_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  account_name: string;

  @IsEnum(opportunity_stage)
  @IsNotEmpty()
  stage: opportunity_stage;

  @IsDateString()
  @IsNotEmpty()
  close_date: Date;

  @IsNumber()
  @IsOptional()
  probability: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  opportunity_owner_alias: string;
}
