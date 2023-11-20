import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PatchAccountDto } from './dto';

@Injectable()
export class AccountService {
  constructor(private readonly dbService: DbService) {}

  async create(userId: number) {
    return this.dbService.account.create({
      data: { ownerId: userId, isBlockingEnabled: false },
    });
  }

  async getAccount(userId: number) {
    return this.dbService.account.findFirstOrThrow({
      where: { ownerId: userId },
    });
  }

  async pathAccount(userId: number, patch: PatchAccountDto) {
    return this.dbService.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }
}
