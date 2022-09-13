import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),
      forwardRef(() => UsersModule),
      JwtModule.register({
        secret: process.env.SECRET_WORD,
        signOptions: { expiresIn: process.env.TOKEN_TIME_LIFE }
      }),
  ],
  exports: [AuthModule, JwtModule]
})
export class AuthModule {}
