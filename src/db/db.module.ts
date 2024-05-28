import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskEntity } from './entities/tasks.entity';
import { UserEntity } from './entities/users.entity';

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [TaskEntity, UserEntity],
        migrations: [__dirname + '/migrations/**'],
        synchronize: false,
      }),
      inject: [ConfigService],
    })
  ]
})
export class DbModule {}
