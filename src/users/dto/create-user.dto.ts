import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'string', description: 'User Email' })
  readonly email: string;
  @ApiProperty({ example: 'string', description: 'User Password' })
  readonly password: string;
}
