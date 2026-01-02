import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Application,ApplicationDocument} from './schema/application.schema'

@Injectable()
export class ApplicationService {
    constructor(
            @InjectModel(Application.name) private readonly applicationModel: Model<ApplicationDocument>
        ) { }
    async getJob(body:{
        userId:string
    }){
        const find = await this.applicationModel.find({applicant:body.userId})
        return {
            status:200,
            data:find
        }
    }
    async applyJob(body:{
        role:string,
        jobId:string,
        userId:string
    }) {
        if(body.role!=='jobseeker') {
            return {
                status:403,
                message : 'only job seekers can apply'
            }
        }
        const find = await this.applicationModel.findOne({
            job : body.jobId,
            applicant: body.userId
        })
        if(find) {
            return {
                status:400,
                message : 'already applied'
            }
        }
        const application = this.applicationModel.create({
            job:body.jobId,
            applicant:body.userId
        })
        return {
            status:201,
            data:application
        }
    }
}
