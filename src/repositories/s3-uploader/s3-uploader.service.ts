import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

const FILE = 'mvc.test.json';
const S3_BUCKET = process.env.S3_BUCKET;

const s3 = new S3();

@Injectable()
export class S3UploaderService {
  async getLeaderboard(): Promise<any> {
    const params = {
      Bucket: S3_BUCKET,
      Key: FILE,
    };

    const leaderboard_string = await s3
      .getObject(params)
      .promise()
      .then(res => res.Body.toString('utf-8'))
      .catch(err => err);

      console.log(leaderboard_string);

    return JSON.parse(leaderboard_string);
  }
}
