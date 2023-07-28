import { Account } from 'src/accounts/entities/account.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';
export enum opportunity_stage {
  qualification = 'QUALIFICATION',
  needs_analysis = 'NEEDS_ANALYSIS',
  proposal = 'PROPOSAL',
  negotiation = 'NEGOTIATION',
  closed_won = 'CLOSED_WON',
  closed_lost = 'CLOSED_LOST',
}

export enum probability_percent {
  qualification = 10,
  needs_analysis = 35,
  proposal = 75,
  negotiation = 90,
  closed_won = 100,
  closed_lost = 0,
}

@Entity({ name: 'opportunity' })
export class Opportunity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({
    name: 'opportunity_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  opportunity_name: string;

  @ManyToOne(() => Account, (account) => account.opportunity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'sender_id' })
  Account: Account;

  @Column({
    name: 'account_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  account_name: string;

  @Column({ name: 'probability', type: 'integer' })
  probability: number;

  @Column({
    name: 'stage',
    type: 'enum',
    enum: opportunity_stage,
    nullable: false,
  })
  stage: opportunity_stage;

  @Column({ name: 'close_date', type: 'date', nullable: false })
  close_date: Date;

  @Column({
    name: 'opportunity_owner_alias',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  opportunity_owner_alias: string;
}
