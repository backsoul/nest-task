import {
  Get,
  Param,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskservice: TaskService) {}
  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return this.taskservice.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskservice.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskservice.update(id, taskDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskservice.delete(id);
  }
}
