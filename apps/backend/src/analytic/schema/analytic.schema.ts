// src/analytics/schemas/analytics.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schema/users.schema';

export type AnalyticsDocument = Analytics & Document;

@Schema({ timestamps: true })
export class Analytics {
  // Employer reference
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  employer: User | Types.ObjectId;

  // Total jobs posted
  @Prop({ default: 0 })
  totalJobsPosted: number;

  // Total applications received
  @Prop({ default: 0 })
  totalApplicationsReceived: number;

  // Total applicants hired
  @Prop({ default: 0 })
  totalHired: number;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
