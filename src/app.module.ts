import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { AccountsModule } from './accounts/accounts.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmConfig } from './config/typeorm-config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => TypeOrmConfig }),
    LeadsModule,
    AccountsModule,
    OpportunitiesModule,
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
