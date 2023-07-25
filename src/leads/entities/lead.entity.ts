import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Salutation } from '../enum/leadsaluation.enum';
import { LeadStatus } from '../enum/leadstatus.enum';
import { LeadSource } from '../enum/leadsource.enum';
import { Rating } from '../enum/leadrating.enum';
import { Industry } from 'src/accounts/enum/industry.type.enum';
@Entity('lead')
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: Salutation, default: Salutation.Mr })
  salutation: Salutation;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  title: string;

  @Column()
  website: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: LeadStatus, default: LeadStatus.New })
  lead_status: LeadStatus;

  @Column()
  owner_id: string;

  @Column({ type: 'enum', enum: LeadSource, default: LeadSource.ADVERTISEMENT })
  lead_source: LeadSource;

  @Column({ type: 'enum', enum: Rating, default: Rating.Warm })
  rating: Rating;

  @Column('text')
  description: string;

  // ------------------Company Information ---------------
  @Column()
  company: string;

  @Column()
  no_of_employee: number;

  @Column({ type: 'enum', enum: Industry, default: Industry.Agriculture })
  industry: Industry;

  // ------------------Address Information ---------------
  @Column()
  address: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column()
  province: string;

  @Column()
  counrty: string;
}
