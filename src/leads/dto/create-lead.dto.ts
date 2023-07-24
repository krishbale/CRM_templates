import { Salutation } from '../enum/leadsaluation.enum';
import { LeadStatus } from '../enum/leadstatus.enum';
import { LeadSource } from '../enum/leadsource.enum';
import { Rating } from '../enum/leadrating.enum';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  salutation: Salutation;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  title: string;

  @IsString()
  account_id: string;

  @IsString()
  mobile: string;

  @IsString()
  email: string;

  @IsString()
  lead_status: LeadStatus;

  @IsString()
  owner_id: string;

  @IsString()
  contact_status: boolean;

  @IsString()
  deal_id: string;

  @IsString()
  opportunity_id: string;

  @IsString()
  lead_source: LeadSource;

  @IsString()
  rating: Rating;

  @IsString()
  description: string;
}
