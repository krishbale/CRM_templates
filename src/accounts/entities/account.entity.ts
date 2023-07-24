import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Industry } from '../enum/industry.type.enum';
import { CurrencyFormat } from '../enum/currency.format.enum';
@Entity('account')
export class Account {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  lead_id: string;

  @Column({ type: 'enum', enum: Industry, default: Industry.Agriculture })
  industry: Industry;
  @Column()
  annual_revenue: string;

  @Column()
  no_of_employee: number;

  @Column()
  owner_id: string;

  @Column({
    type: 'enum',
    enum: CurrencyFormat,
    default: CurrencyFormat.USD,
  })
  currency_format: CurrencyFormat;
}
