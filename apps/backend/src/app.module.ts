import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { SavedjobsModule } from './savedjobs/savedjobs.module';
import { ApplicationModule } from './application/application.module';
import { AnalyticModule } from './analytic/analytic.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/jobportal', {}),
    UsersModule,
    JobsModule,
    SavedjobsModule,
    ApplicationModule,
    AnalyticModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
