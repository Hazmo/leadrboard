import { Injectable } from '@nestjs/common';
import { S3UploaderService } from 'src/repositories/s3-uploader/s3-uploader.service';

@Injectable()
export class LeaderboardService {
  constructor(private readonly s3UploadService: S3UploaderService) {}


  async getLeaderboard(): Promise<any> {
      return await this.s3UploadService.getLeaderboard();
  }
}
