import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SavedjobsService } from './savedjobs.service';
import { SavedjobsController } from './savedjobs.controller';
import {SavedJobs,SavedJobsSchema} from './schema/savedjob.schema'

@Module({
  imports:[MongooseModule.forFeature([{name:SavedJobs.name,schema: SavedJobsSchema}])],
  providers: [SavedjobsService],
  controllers: [SavedjobsController]
})
export class SavedjobsModule {}
