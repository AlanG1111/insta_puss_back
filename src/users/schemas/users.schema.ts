import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ example: 'aaa@gmail.com', description: 'User Email' })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ example: 'aaa111', description: 'User Password' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: 'userName', description: 'User Nickname' })
  @Prop()
  userName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
