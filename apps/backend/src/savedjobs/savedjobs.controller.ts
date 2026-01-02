import { Controller, Post, Body, Put } from '@nestjs/common';
import { SavedjobsService } from './savedjobs.service';
import { SavedJobs,ApplicationDocument } from './schema/savedjob.schema'

@Controller('savedjobs')
export class SavedjobsController {
   constructor(private readonly jobService: SavedjobsService) { }
       @Post('')
       async saveJob(@Body() body:{
        jobId:string,
        userId:string
       }) {
        return this.jobService.savedJob(body)
       }
}
