import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = new this.userRepository(dto);
    return user.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find().exec();
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = this.userRepository.findOne({ email: email });
    return user;
  }
}
