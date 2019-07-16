import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { S3UploaderModule } from '../repositories/s3-uploader/s3-uploader.module';

@Module({
  imports: [S3UploaderModule],
  providers: [LeaderboardService],
  controllers: [LeaderboardController],
})
export class LeaderboardModule {}
