import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job, JobDocument, } from './schema/job.schema'

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService: JobsService) { }
    @Post('')
    async createJob(@Body() body: 
    { role: string, 
        userId: string, 
        title: string, 
        description: string, 
        location: string, 
        requirements: string,
        category:string,
        type:any ,
        salaryMin:string,
        salaryMax:string
   }
) {
        return this.jobService.createJob(body)
    }
    @Post('')
    async getJob(@Body() body:{
        userId:string,
        role:string
    }) {
        return this.jobService.getJob(body)
    }
}
