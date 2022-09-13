import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users.model';
import {UsersController} from './users.controller';
import {AuthModule} from '../auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User]),
      forwardRef(() => AuthModule),
  ],
    exports: [
        UsersModule,
        UsersService,
    ],
})
export class UsersModule {}
