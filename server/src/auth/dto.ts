import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({ example: 'john@doe.com' })
  email: string;

  @ApiProperty({ example: 'qwerty' })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({ example: 'john@doe.com' })
  email: string;

  @ApiProperty({ example: 'qwerty' })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
