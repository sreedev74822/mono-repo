import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {SavedjobsModule} from './savedjobs.module'
import { Model } from 'mongoose';
import {ApplicationDocument,SavedJobs} from './schema/savedjob.schema'

@Injectable()
export class SavedjobsService {
      constructor(
            @InjectModel(SavedJobs.name) private readonly savedModel: Model<ApplicationDocument>
        ) { }
        async savedJob(body:{
            jobId:string,
            userId:string
        }) {
            const find = await this.savedModel.findOne({job:body.jobId,jobSeeker:body.userId})
            if(find) {
                return {
                    status : 400,
                    message : 'already exists'
                }
            }
            const saved = await this.savedModel.create({
                job:body.jobId,jobSeeker:body.userId
            })
            return {
                status : 201,
                data:saved
            }
        }
}
