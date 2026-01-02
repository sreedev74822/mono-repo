import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from './schema/job.schema';

@Injectable()
export class JobsService {
    constructor(
        @InjectModel(Job.name) private readonly jobModel: Model<JobDocument>
    ) { }
    async createJob(body:{
        role:string,
        userId:string,
        title:string,
        description:string,
        location:string,
        requirements:string,
        category:string,
        type:any,
        salaryMin:string,
        salaryMax:string
    }) {
        if(body.role !== 'employeer') {
            return {
                status:403,
                message: 'only Employers can create job'
            }
        }
        const job = await this.jobModel.create({company:body.userId})
        return {
            status:201,
            data:job,
            message : 'job created successfully'
        }
    }
    async getJob(body:{
        userId:string,
        role:string
    }) {
        if(body.role !=='employer') {
            return {
                status:403,
                message: 'only Employers can get job'
            }
        }
     const job = await this.jobModel.find({company:body.userId})
     return {
        status:200,
        data:job
     }
    }
}
