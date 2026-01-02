import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import {AnalyticService} from './analytic.service'

@Controller('analytic')
export class AnalyticController {
    constructor(private readonly analyticService: AnalyticService) { }
    @Post('dashboard')
        async getAnalytic(@Body() body :{
            role:string,
            jobId:string,
            userId:string
        }) {
            return this.analyticService.getEmployeeAnalytic(body)
        }
}
