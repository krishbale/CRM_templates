import { Salutation } from '../enum/leadsaluation.enum';
import { LeadStatus } from '../enum/leadstatus.enum';
import { LeadSource } from '../enum/leadsource.enum';
import { Rating } from '../enum/leadrating.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Industry } from 'src/accounts/enum/industry.type.enum';

export class CreateLeadDto {
  // ----------------Lead Information ---------------
  @IsEnum(Salutation)
  salutation: Salutation;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  title: string;

  @IsString()
  mobile: string;

  @IsString()
  email: string;

  @IsString()
  website: string;

  @IsEnum(LeadStatus)
  lead_status: LeadStatus;

  @IsString()
  @IsNotEmpty()
  owner_id: string;

  @IsEnum(Rating)
  rating: Rating;

  @IsString()
  description: string;

  @IsEnum(LeadSource)
  lead_source: LeadSource;

  // -----------------Company Information ---------------

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsNumber()
  no_of_employee: number;

  @IsString()
  industry: Industry;

  // -----------------Address Information ---------------
  @IsString()
  address: string;

  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  zipcode: string;

  @IsString()
  province: string;

  @IsString()
  counrty: string;
}
