import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Industry } from '../enum/industry.type.enum';
import { AccountType } from '../enum/account.type.enum';
import { OneToMany } from 'typeorm';
import { Opportunity } from 'src/opportunities/entities/opportunity.entity';
import { JoinColumn } from 'typeorm';
@Entity('account')
export class Account {
  // ----------------Account Information---------------
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  account_name: string;

  @Column()
  account_owner_id: string;

  @Column({ type: 'enum', enum: AccountType, default: AccountType.Customer })
  account_type: AccountType;

  @Column()
  phone1: string;

  @Column({ type: 'enum', enum: Industry, default: Industry.Agriculture })
  industry: Industry;

  // ---------------Additional Information --------------------

  @Column()
  website: string;

  @Column()
  phone2: string;

  @Column()
  no_of_employee: number;

  @Column()
  description: string;

  // --------------Address-Information-----------------------
  // ---------------------Billing-Address------------------------

  @Column()
  billing_address: string;

  @Column()
  billing_street: string;

  @Column()
  billing_city: string;

  @Column()
  billing_zip_code: string;

  @Column()
  billing_country: string;

  // ----------------Shipping-Address-----------------------------

  @Column()
  shipping_address: string;

  @Column()
  shipping_street: string;

  @Column()
  shipping_city: string;

  @Column()
  shipping_zip_code: string;

  @Column()
  shipping_country: string;

  // -----------------------System-Information----------------------------

  @Column()
  created_by: string;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  last_modified_by: Date;

  // -----------------------System-Information----------------------------

  @OneToMany(() => Opportunity, (opportunities) => opportunities.account_name, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'opportunities_id' })
  opportunity: Opportunity[];
}
