import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Account } from 'src/accounts/entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
