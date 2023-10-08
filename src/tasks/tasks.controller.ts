import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskServices } from './shared/task.services/task.services';
import { Task } from './shared/task/task';

@Controller('tasks')
export class TasksController {

    constructor(
        private taskService: TaskServices
    ) {}

    @Get()
    async getAll() : Promise<Task[]> { return this.taskService.getAll();
    }

    @Get(':id')
    async GetById(@Param('id') id:String) : Promise<Task> { 
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> { 
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id:String, @Body() task: Task) : Promise<Task> { 
        task.id = id;
        return this.taskService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id:String) { 
        this.taskService.delete(id);
    }
}
