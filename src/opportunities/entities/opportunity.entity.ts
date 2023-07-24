import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'opportunity_name', type: 'varchar', length: 100 })
  opportunity_name: string;

  @Column({
    name: 'account_name',
    type: 'varchar',
    length: 100,
  })
  account_name: string;

  @Column({ name: 'probability', type: 'integer' })
  probability: number;

  @Column({
    name: 'stage',
    type: 'enum',
    enum: opportunity_stage,
    default: opportunity_stage.qualification,
  })
  stage: opportunity_stage;

  @Column({ name: 'close_date', type: 'date' })
  close_date: Date;

  @Column({ name: 'opportunity_owner_alias', type: 'varchar', length: 100 })
  opportunity_owner_alias: string;
}
