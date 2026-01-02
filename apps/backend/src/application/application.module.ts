import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import {ApplicationSchema,Application } from './schema/application.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Application.name, schema: ApplicationSchema }])],
    providers: [ApplicationService],
    controllers: [ApplicationController]
})
export class ApplicationModule {}
