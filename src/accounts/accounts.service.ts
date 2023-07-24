import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}
  async create(createAccountDto: CreateAccountDto) {
    return await this.accountRepository.save(createAccountDto);
  }

  async findAll() {
    return await this.accountRepository.find();
  }

  async findOne(id: string) {
    return await this.accountRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(id, updateAccountDto);
  }

  remove(id: string) {
    return this.accountRepository.delete(id);
  }
}
