import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({ type: HelloWorldDto })
  async getHello(): Promise<HelloWorldDto> {
    // FIXME:
    const users = await this.dbService.user.findMany({});
    console.log('users', users);

    return { message: this.appService.getHello() };
  }
}
