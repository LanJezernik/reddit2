import { Module } from '@nestjs/common';
import { SubService } from './sub.service';
import { SubController } from './sub.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubEntity} from "./sub.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SubEntity])],
  providers: [SubService],
  controllers: [SubController]
})
export class SubModule {}
