// src/applications/schemas/application.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schema/users.schema';
import { Job } from '../../jobs/schema/job.schema';

export type ApplicationDocument = Application & Document;

// Enum for application status
export enum ApplicationStatus {
  APPLIED = 'applied',
  IN_REVIEW = 'in_review',
  REJECTED = 'rejected',
  ACCEPTED = 'accepted',
}

@Schema({ timestamps: true })
export class Application {
  // Reference to the job being applied to
  @Prop({ type: Types.ObjectId, ref: 'Job', required: true })
  job: Job | Types.ObjectId;

  // Reference to the applicant (user)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  applicant: User | Types.ObjectId;

  // Resume file or URL
  @Prop()
  resume?: string;

  // Status of the application
  @Prop({ enum: ApplicationStatus, default: ApplicationStatus.APPLIED })
  status: ApplicationStatus;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
