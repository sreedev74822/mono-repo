// src/applications/schemas/application.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schema/users.schema';
import { Job } from '../../jobs/schema/job.schema';

export type ApplicationDocument = SavedJobs & Document;

export enum ApplicationStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

@Schema({ timestamps: true })
export class SavedJobs {
  // Job seeker reference
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  jobSeeker: User | Types.ObjectId;

  // Job reference
  @Prop({ type: Types.ObjectId, ref: 'Job', required: true })
  job: Job | Types.ObjectId;

}

export const SavedJobsSchema = SchemaFactory.createForClass(SavedJobs);
