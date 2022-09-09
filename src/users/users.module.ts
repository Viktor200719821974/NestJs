import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users.model';
import {UsersController} from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User])
  ],
    exports: [
        UsersService,
    ],
})
export class UsersModule {}