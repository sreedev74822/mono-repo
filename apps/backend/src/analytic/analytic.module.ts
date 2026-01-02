import { Module } from '@nestjs/common';
import { AnalyticService } from './analytic.service';
import { AnalyticController } from './analytic.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Analytics,AnalyticsSchema} from './schema/analytic.schema'

@Module({
  imports:[MongooseModule.forFeature([{name:Analytics.name, schema: AnalyticsSchema}])],
  providers: [AnalyticService],
  controllers: [AnalyticController]
})
export class AnalyticModule {}
