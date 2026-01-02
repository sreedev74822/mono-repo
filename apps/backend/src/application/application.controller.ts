import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import {ApplicationService} from './application.service'

@Controller('application')
export class ApplicationController {
     constructor(private readonly jobService: ApplicationService) { }
        @Post('')
        async applyJob(@Body() body :{
            role:string,
            jobId:string,
            userId:string
        }) {
            return this.jobService.applyJob(body)
        }
        @Post('')
        async getJobs(@Body() body:{
             userId:string
        }) {
            return this.jobService.getJob(body)
        }
}
