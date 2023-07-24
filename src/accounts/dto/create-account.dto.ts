import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { AccountType } from '../enum/account.type.enum';
import { Industry } from '../enum/industry.type.enum';

export class CreateAccountDto {
  // ----------------Account Information---------------

  @IsString()
  @IsNotEmpty()
  account_name: string;

  @IsString()
  @IsNotEmpty()
  account_owner_id: string;

  @IsEnum(AccountType)
  account_type: AccountType;

  @IsString()
  phone1: string;

  @IsEnum(Industry)
  industry: Industry;

  @IsOptional()
  @ValidateNested() // This is used to validate the parent property recursively
  parent?: CreateAccountDto;

  // ---------------Additional Information --------------------

  @IsString()
  website: string;

  @IsString()
  phone2: string;

  @IsInt()
  @Min(0)
  no_of_employee: number;

  @IsString()
  description: string;

  //   --------------Address-Information-----------------------
  // ---------------------Billing-Address------------------------

  @IsString()
  billing_address: string;

  @IsString()
  billing_street: string;

  @IsString()
  billing_city: string;

  @IsString()
  billing_zip_code: string;

  @IsString()
  billing_country: string;

  // ---------------------Shipping-Address------------------------

  @IsString()
  shipping_address: string;

  @IsString()
  shipping_street: string;

  @IsString()
  shipping_city: string;

  @IsString()
  shipping_zip_code: string;

  @IsString()
  shipping_country: string;

  // ---------------------system-Information------------------------

  @IsString()
  created_by: string;
}
