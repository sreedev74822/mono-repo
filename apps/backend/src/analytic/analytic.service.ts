import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnalyticsDocument,Analytics} from './schema/analytic.schema'

@Injectable()
export class AnalyticService {
      constructor(
                @InjectModel(Analytics.name) private readonly applicationModel: Model<AnalyticsDocument>
            ) { }
      getEmployeeAnalytic(body:{
        role:string
      }) {
        if(body.role !=='jobseeker') {
            return {
                Status:403,
                message:'No PERMIsSion'
            }
        }
        
      }
}
