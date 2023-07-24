import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Salutation } from '../enum/leadsaluation.enum';
import { LeadStatus } from '../enum/leadstatus.enum';
import { LeadSource } from '../enum/leadsource.enum';
import { Rating } from '../enum/leadrating.enum';

@Entity('lead')
//entity deep partials
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
  account_id: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: LeadStatus, default: LeadStatus.New })
  lead_status: LeadStatus;

  @Column()
  owner_id: string;

  @Column()
  contact_status: boolean;

  @Column()
  deal_id: string;

  @Column()
  opportunity_id: string;

  @Column({ type: 'enum', enum: LeadSource, default: LeadSource.ADVERTISEMENT })
  lead_source: LeadSource;

  @Column({ type: 'enum', enum: Rating, default: Rating.Warm })
  rating: Rating;

  @Column('text')
  description: string;
}
