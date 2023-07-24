import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'contact' })
export class Contact {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'account_name', type: 'varchar', length: 100 })
  account_name: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: true })
  phone_number: string;

  @Column({ name: 'email', type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ name: 'contact_owner_alias', type: 'varchar', length: 100 })
  contact_owner_alias: string;
}
