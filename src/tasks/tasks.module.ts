import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { SharedService } from './shared/shared.service';

@Module({
  controllers: [TasksController],
  providers: [SharedService]
})
export class TasksModule {}
