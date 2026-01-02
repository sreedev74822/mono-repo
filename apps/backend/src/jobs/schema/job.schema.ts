// src/jobs/schemas/job.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schema/users.schema';

export type JobDocument = Job & Document;

// Enum for job types
export enum JobType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  CONTRACT = 'contract',
  INTERNSHIP = 'internship',
  FREELANCE = 'freelance',
  TEMPORARY = 'temporary',
  REMOTE = 'remote',
}

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  requirements?: string;

  @Prop()
  category?: string;

  @Prop({ required: true, enum: JobType })
  type: JobType;

  @Prop({ required: true })
  salaryMin: number;

  @Prop({ required: true })
  salaryMax: number;

  @Prop({ default: false })
  isClosed: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  company: User | Types.ObjectId;
}

export const JobSchema = SchemaFactory.createForClass(Job);
