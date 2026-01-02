// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  JOBSEEKER = 'jobseeker',
  EMPLOYER = 'employer',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string; // always store hashed passwords!

  @Prop({ required: true, enum: UserRole })
  role: UserRole;

  // Optional fields
  @Prop()
  companyName?: string; // for employers

  @Prop()
  logo?: string; // company logo URL or filename

  @Prop()
  description?: string; // company description

  @Prop()
  resume?: string; // file URL or filename for job seekers
}

export const UserSchema = SchemaFactory.createForClass(User);
