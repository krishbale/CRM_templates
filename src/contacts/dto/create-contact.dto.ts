import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';
export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  account_name: string;

  @IsString()
  @IsOptional()
  phone_number: string;

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @IsString()
  contact_owner_alias: string;
}
