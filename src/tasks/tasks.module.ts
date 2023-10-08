import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskServices } from './shared/task.services/task.services';
import { TaskSchema } from './schemas/task.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])
    ],
    controllers: [TasksController],
    providers: [TaskServices]

})
export class TasksModule {}
