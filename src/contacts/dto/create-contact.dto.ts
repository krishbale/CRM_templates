import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  account_name: string;

  @IsString()
  @IsOptional()
  phone_number: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(50)
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  contact_owner_alias: string;
}
