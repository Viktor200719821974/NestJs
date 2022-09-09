import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import {UsersModule} from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      entities: [
          __dirname + '/**/*.entity{.ts,.js}'
      ],
      migrationsRun: true,
      migrations: ['dist/migrations/*.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      autoLoadEntities: true,
    }),
      UsersModule,
      AuthModule
  ],
})
export class AppModule {}
