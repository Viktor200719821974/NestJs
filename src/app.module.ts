import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import {User} from './users/users.model';
import {UsersModule} from './users/users.module';
import { FilesModule } from './files/files.module';
import {PostsModule} from './posts/posts.module';
import {AuthModule} from './auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      models: [User],
      autoLoadModels: true,
    }),
      UsersModule,
      FilesModule,
      PostsModule,
      AuthModule,
  ],
})
export class AppModule {}
