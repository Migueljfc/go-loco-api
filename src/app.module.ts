import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { AchievementsModule } from './achievements/achievements.module';
import { MarkersModule } from './markers/markers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProfileModule,
    AchievementsModule,
    MarkersModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        host: config.get('DB_HOST'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
