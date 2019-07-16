import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderboardController } from './leaderboard/leaderboard.controller';
import { LeaderboardService } from './leaderboard/leaderboard.service';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { S3UploaderModule } from './repositories/s3-uploader/s3-uploader.module';

@Module({
  imports: [LeaderboardModule, S3UploaderModule],
  controllers: [AppController, LeaderboardController],
  providers: [AppService, LeaderboardService],
})
export class AppModule {}
