import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { AccountsModule } from './accounts/accounts.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm-config';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useFactory: () => ormConfig }), LeadsModule, AccountsModule, OpportunitiesModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
